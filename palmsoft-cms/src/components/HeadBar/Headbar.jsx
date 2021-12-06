import * as React from "react";
import { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Form from 'react-bootstrap/Form';
import Drawer from '@material-ui/core/Drawer';
import builder, { BuilderContent } from '@builder.io/react';
import { Cart } from '../Cart';
import { withRouter } from "react-router";

/*This class component is a 'common' component that will appear on all pages rendered
it will manage state of key properties for user authorizations and navigation
*/
class Headbar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             auth: false,
             anchorEl: null,
             userName: '',
             password: '',
             token: '',
             showCart: (builder.editingModel === 'cart-content'),
             subLoad: false
        }

        this.handleAuthSuccess = this.handleAuthSuccess.bind(this);
        this.handleUserCred = this.handleUserCred.bind(this);
    }

    handleUserCred = (user) => {
        this.props.handleCredentials(user)
    }

    //method to carry token state to handleAccess function on App.js component to store token property for 
    //current session
    handleAuthSuccess = (token) => {
        this.props.handleAccess(token);
    }

    handleMenu = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    };

    //method to handle redirect to profile page
    gotoProfile = () => {
        window.location.href = ("/user/profile");
    };

    //method to handle redirect to account page
    gotoAccount = () => {

        this.props.history.push("/account");
        this.handleClose();
    };

    //method to handle redirect to signup/registeration page
    gotoSignup = () => {
        this.props.history.push("/user/signup");
        this.handleClose();
    };

    //method to handle logout - clear states: auth and token
    handleLogout = () => {
        this.setState({
            auth: false
        });
        this.setState({
            token:''
        });

        window.location.href = ('/')
    };

    //track value of username input by storing value in userName property
    handleUserChange = (e) => {
        let userInput = e.target.value;

        this.setState({
            userName: userInput
        });
    };

    //track value of password input by storing value in password property
    handlePassChange = (e) => {
        let passInput = e.target.value;

        this.setState({
            password: passInput
        });
    }

    //method handles fetch function to verify user and store token value in state property and 
    //chagne auth property
    handleLogin = (e) => {

        e.preventDefault()
        
        let userCred = {username: this.state.userName, password: this.state.password};

        this.setState({
            subLoad: true
        });

          
        fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCred)
        })
        .then(res => res.json())
        .then((result) => {
            if(result.status === 'Authorized') {
                //call functions to update session token and user credentials in app
                this.handleAuthSuccess(result.token);
                this.handleUserCred(result.user);

                this.setState({
                    token: result.token
                });

                this.setState({
                    auth: true
                });

                alert(result.message);

            }
            else{
                alert(`
                Oops! Something went wrong

                Login unsuccessful.

                Please check creditials and try again.`);

                alert(result.message);
            }
            
        });
    }


    render() {

        const { auth, anchorEl, userName, password, subLoad, showCart } = this.state;
        //history variable assigned value from props => app.js (BrowserRouter)
        let { history } = this.props;

    return(
        <>
        <Box sx={{ flexGrow: 1 }} background-color="#373b52">
            <div style={{paddingTop: 30}} />
            
            <AppBar position="static" background-color="#373b52" color="secondary" height={80}>
                <Toolbar>
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                    <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        auth={auth}
                        anchorEl={anchorEl}
                        keepMounted
                        transformOrigin={{
                            vertical: 4,
                            horizontal: "center",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.gotoAccount}>-</MenuItem>
                        <MenuItem onClick={this.gotoSignup}>Sign up</MenuItem>
                        <MenuItem onClick={this.gotoAccount}>Account</MenuItem>
                        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
                <div>
                    {auth
                    ? <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Welcome back!</Typography> 
                    : <Form>
                        <input type='text' value={userName} onChange={this.handleUserChange} className="todo-input" placeholder="username" style={{marginRight: 5, marginLeft: 5}} />

                        <input type='password' value={password} onChange={this.handlePassChange} className="todo-input" placeholder="password" style={{marginRight: 10}} />

                        <button onClick={this.handleLogin} type='submit' className="todo-button">{subLoad ? (<>Sending..</>) : (<>Login</>)}</button>
                        
                    </Form>
                    }
                </div>      
                </Toolbar>
            </AppBar>
        </Box>
        <div>
        <div className="Header" style= {{display: 'flex', padding: 35}}>
        <>
            {auth
            ? (<>
                <div style={{ marginRight: 10}} >
                    <button type="button" className="nav-btn" 
                        onClick={()=> {
                            history.push("/");
                        }}
                    >
                        Home
                    </button>
                </div>
                <div style={{ marginRight: 10}} >
                    <button type="button" className="nav-btn" 
                        onClick={()=> {
                            history.push("/about");
                        }}
                    >
                        About
                    </button>
                </div>
                <div style={{ marginRight: 10}} >
                    <button type="button" className="nav-btn" 
                        onClick={()=> {
                            history.push("/library");
                        }}
                    >
                        Library
                    </button>
                </div>
                <div style={{ marginRight: 5 }} >
                    <button type="button" className="nav-btn" 
                        onClick={()=> {
                            history.push("/curation");
                        }}
                    >
                        Curation
                    </button>
                </div>
            </>
                )
            : (
            <>
                <div key={"history"} style={{ marginRight: 15}} >
                    <a href='/'>Home</a>
                </div>
                <div style={{ marginRight: 15}} >
                    <a href='/about'>About</a>
                </div>
                <div style={{ marginRight: 15}} >
                    <a href='/user/signup'>Library</a>
                </div>
                <div style={{ marginRight: 15}} >
                    <a href='/user/signup'>Curation</a>
                </div>
            </>
            )
        }
        </> 
        <a  href='/about' 
            id="Heading" 
            className="Logo" 
            style={{letterSpacing: 2,
                    fontWeight: 600,
                    fontSize: 'larger',
                    
                    marginRight: 'auto',
                    marginLeft: 'auto'
                }}
        >
            PALMSOFT LIBRARY
        </a>
        <a className="cartLink" style={{marginRight: '10px', ...auth ? {paddingLeft: 190} : {paddingLeft: 200}}} 
            onClick={() => {
                this.setState({
                    showCart: !showCart
                });
            }}
        >
            Contact
        </a>
        <Drawer anchor="right" open={showCart} 
            onClose={() => {
                this.setState({
                    showCart: false
                });
            }}
        >
            <Cart />
        </Drawer>
        <br></br>
        </div>
        </div>
    </>
    )}
}

export default withRouter(Headbar);