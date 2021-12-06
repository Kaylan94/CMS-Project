const express = require('express');
const path = require('path');
const app = express();
const jwt = require ('jsonwebtoken');
const mongoose = require('mongoose');
const bodyParserJ = require('body-parser').json();
const bodyParserU = require('body-parser').urlencoded({ extended: false });
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 8080;
const DB_Uri = process.env.DB_URI;
const bcrypt = require('bcrypt');
require('dotenv').config();
const helmet = require("helmet");

app.use(helmet());
app.use(bodyParserJ);
app.use(bodyParserU);
app.use(cookieParser());

app.use(function(req, res, next) {
    // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "https://palmsoft-cms.herokuapp.com/"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//static
app.use(express.static(path.join(__dirname, 'build')));

//production
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}else {
    app.get("/", (req, res) => {
        res.send("Api running");
    });
}

/*Route to handle post requestion to add new content by taking in the values: 
    - authorization(token) 
    - content form information
    - */
app.post('/api/curation/add', (req, res) => {
    const auth = req.headers['authorization'];
    const token = auth.split(' ')[1];
    const Content = require('./models/content.model.js');

    let contentOwner = req.body.owner;
    let contentTitle = (req.body.title);
    let urlTitle = (req.body.title).split(' ').join('-')
    let contentCategory = req.body.category;
    let contentExposure  = req.body.exposure;
    let public;
    if(contentExposure === 'true') {public = true}
    else{public = false};
    let contentUrl = `/content/${contentCategory.toLowerCase()}/${urlTitle.toLowerCase()}` 

    try {
        //verify token
        const decoded = jwt.verify(token, 'jwt-secret' );

        if (decoded.name === contentOwner) {
            //create new task object with the owner property as the value of name derived from the payload
            let contentModel = new Content({
                owner: contentOwner,
                title: contentTitle, 
                category: contentCategory,
                public: public,
                url: contentUrl
            });

            //save to database
            contentModel.save(function(err, data) {
            if (err) {
                console.log(err);
                res.status(500).send({ message: 'Some error occurred while creating the blog.' });
            } else {
                console.log(data);
                res.send({message: 'New blog has been added successfully! Please proceed to builder.io by clicking `START`.'});
            }
        });

        } else{
            res.status(500).send({ message: 'Permission to create blog denied. Check `Content Owner`.' });
        }
        
    } catch (err) {
        res.status( 401 ).send({ message : 'Bad JWT! Operation failed' })
    }

});

//route to register a new user
app.post('/user/signup', async (req, res) => {
    //get the model for a new user
    const Blog = require('./models/blog.model.js');
    //get user info from body prop
    const { firstName, lastName, username, password, email} = req.body;

    try {

        //using bcrypt, encrypt user password
        const hashedPwd = await bcrypt.hash(password, 10);
        //create new user object
        const newUser = new Blog ({
            username: username,
            password: hashedPwd,
            first_name: firstName,
            last_name: lastName,
            email: email,
            admin: false
        });

        //save new user object to database
        newUser.save(function(err, data) {
            if (err) {
                console.log(err);
                res.status(500).send({ message: "Some error occurred while creating the blog." });
            } else {
                console.log(data);
                res.send({message: 'New user has been added'});
            }
        });
    }catch {
        res.status(500).send();
    }

});

//auth endpoint
//user login
app.post( '/api/user/login' , async (req, res) => {
    const usr = req.body.username;
    let isAdmin;
    if(usr === "Admin") {isAdmin = true} 
    else{isAdmin = false};
    const pwd = req.body.password;
    const Blog = require('./models/blog.model.js');
    
    try{
        //find user in database by username
        const user = await Blog.findOne({username: usr});

        //if user does not exist, send relative response
        if(!user) {
            res.status(500).send({message: 'User not found'});
        }
        //compare the password provide at login with the hashed password before sending token
        if(await bcrypt.compare(pwd, user.password)) {
            //if the comparison is successful create payload object with username and the set admin prop
            payload = {
                'name' : usr,
                'admin' : isAdmin
            }
            //create a token variable
            //use the sign function to synchronously sign the given payload into a JSON web token string
            //sign function to take parameters: payload, secretkey, ecryption (signature algorithm)
            const token = jwt.sign(JSON.stringify(payload), 'jwt-secret', {algorithm: 'HS256' });
    
            res.send({ user: usr, status: "Authorized", token : token, message : `Welcome back, ${usr}!!`});
        //if password and username do not match send error message
        } else{
            res.status( 403 ).send({ message : 'Incorrect login!' });
        }
    }catch {
        res.status(500).send();
    }    
});

//resource endpoint
app.get('/api/library' , (req, res) => {
    const auth = req.headers['authorization'];
    const token = auth.split(' ')[1];
    const Content = require('./models/content.model.js');

    try {
        const decoded = jwt.verify(token, 'jwt-secret' );

        Content.find({},function(err, docs) {
            if(err){
                console.log("No user records found for this user.");
                res.send("ERROR: No records found. ");
            }else {
                res.send(docs);
                console.log(docs)
            }
        });
    } catch (err) {
        res.status( 401 ).send({ 'err' : 'Bad JWT!' })
    }
});

//delete tasks specified document from database
app.delete('/api/content/delete', (req, res) => {
    const auth = req.headers['authorization'];
    const token = auth.split(' ')[1];
    const Blog = require('./models/content.model.js');

    try {
        const decoded = jwt.verify(token, 'jwt-secret' );
        //create a query object using the value of the task submitted in the request
        const query = { _id: req.body.id }

        if (decoded.name !== "Admin") {
            res.status( 403 ).send({ message : 'You are not permitted to execute this operation!' })
        }

        Blog.findOneAndRemove(query, function(err) {
            if (err) {
                console.log("ERROR: Blog NOT removed. " + err);
                res.send({message: 'Blog NOT removed.' + err});
            }else {
                res.send({message: "Blog removed."});
            }
        }); 
    }catch {
        res.status( 401 ).send({ message : 'Bad JWT! operation failed.' })
    }
       
});

//delete tasks specified document from database
app.delete('/api/user/delete', (req, res) => {
    const auth = req.headers['authorization'];
    const token = auth.split(' ')[1];
    const Blog = require('./models/blog.model.js');

    try {
        const decoded = jwt.verify(token, 'jwt-secret' );
        //create a query object using the value of the task submitted in the request
        const query = { _id: req.body.id } || { username: decoded.name}

        Blog.findOneAndRemove(query, function(err) {
            if (err) {
                console.log("ERROR: Blogs NOT removed. " + err);
                res.send({message: 'Blogs NOT removed.' + err});
            }else {
                res.send({message: "Blog removed."});
            }
        }); 
    }catch {
        res.status( 401 ).send({ message : 'Bad JWT! operation failed.' })
    }
       
});

//delete tasks specified document from database
app.get('/api/user/account', (req, res) => {
    const auth = req.headers['authorization'];
    const token = auth.split(' ')[1];
    const Blog = require('./models/blog.model.js');

    try {
        const decoded = jwt.verify(token, 'jwt-secret' );
        //create a query object using the value of the task submitted in the request
        const query = {username: decoded.name}

        Blog.findOne(query, function(err, docs) {
            if (err) {
                res.send({message: "User account not found. Please reload and try again or contact your administrator."});
            }else {
                res.send(docs);
            }
        }); 
    }catch {
        res.status( 401 ).send({ message : 'Bad JWT! operation failed.' })
    }
       
});

//update a task record in the database
app.put('/api/user/update', async (req, res) => {
    const auth = req.headers['authorization'];
    const token = auth.split(' ')[1];
    const Blog = require('./models/blog.model.js');

    const { firstName, lastName, username, password, email} = req.body;
    
    try{
        //using bcrypt, encrypt user password
        const hashedPwd = await bcrypt.hash(password, 10);
    
        const decoded = jwt.verify(token, 'jwt-secret');
        //create a user object with the updated user info 
        let updatedDoc = {
            username: username,
            password: hashedPwd,
            first_name: firstName,
            last_name: lastName,
            email: email,
            admin: false
        }

        let query = { _id: req.body.id } || { username: decoded.name };

        //find the object to update using the value of the task itself as the identifier, and
        //return the updated object
        Blog.findOneAndUpdate(query, updatedDoc, { new: true }, function(err, doc) {
            if (err) {
                console.log("Something wrong when updating data!");
                res.send({message : "Not Updated."});
            }else {
                res.send({ message : 'Account update successful!' });
                console.log(doc);
            }
        });
    }catch {
        res.status( 401 ).send({ message : 'Bad JWT! operation failed.' });
    }
});

app.listen(PORT, () => console .log(
    `Now listening at http://localhost:${PORT}` )
    );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send(err.message);
    console.log(err.message);
  });


  mongoose.Promise = global.Promise;
  
  mongoose.connect('mongodb+srv://Kaylan94:4xnGJJn2rhw3P7R@hyperion-king-94.tlzbn.mongodb.net/KingDB94?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    });
  
  mongoose.connection.on('error', function() {
    console .log( 'Connection to Mongo established.' );
    console .log( 'Could not connect to the database. Exiting now...' );
    process.exit();
  });
  
  mongoose.connection.once('open', function() {
      console.log("Successfully connected to the database");
  })
  
  
  module.exports = app;
