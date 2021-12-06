import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Form from 'react-bootstrap/Form';

//Class component for user account table.
//main - request data from database via 'fetch' and return display back to user on account page
class AccountTable extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            userData: [],
            updateTable: true,
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            veriPass: '',
            passMatch: false,
            email: ''
        }

        this.handleAccUpdate = this.handleAccUpdate.bind(this);
    }

    handleAccUpdate(){

        let {username, password, email, firstName, lastName} = this.state;

        let userInfo = {
            firstName: firstName,
            lastName: lastName,
            username: username, 
            password: password,
            email: email
        }

        if(passMatch) {
            fetch('/api/user/update', {
                method: 'PUT',
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.props.token}`
                }
            })
            .then(res => res.json())
            .then((result) => {
                alert(result.message);
            })
        }
        else{
            alert("Can't submit! Please check form entries.");
        }
    }    

    //fetch data immediately after the component has mounted
    componentDidMount() {
        
        let authorization = `Bearer ${this.props.token}`

        if(authorization.length > 0) {

            fetch('/api/user/account', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization
                }
            })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    userData: result
                })
                console.log(result);
            });
        }
    }

    handleDelete = (e) => {

        //use id value assigned to button to set target id
        let targetId = e.target.value;
        let authorization = `Bearer ${this.props.token}`

        const confirmDlt = window.confirm('Are you sure you want to delete your account?');

        //if deletion is confirmed(true) send request to delete document 
        if(confirmDlt) {
            fetch('/api/user/delete', {
                method: 'DELETE',
                body: JSON.stringify({"user": this.props.user}),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization
                }
            })
            .then(res => res.json())
            .then((result) => {
                alert(result.message)
            })
            .then(
                window.location.href("/")
            )
            
        }else {
            alert('Request cancelled');
        }
    }

    //track user change using value attribute and corresponding state property
    handleUserChange=(e)=>{
        let newUser = e.target.value;

        this.setState({
            username: newUser
        });
    }

    //track password change using value attribute and corresponding state property
    handlePassChange=(e)=>{
        let newPass = e.target.value;

        this.setState({
            password: newPass,
            passChange: true
        });
    }

    //track email change using value attribute and corresponding state property
    handleEmailChange=(e)=>{
        let newMail = e.target.value;

        this.setState({
            email: newMail
        });
    }

    //track password verification change using value attribute and corresponding state property
    handleVeriChange=(e)=>{
        let newVeri = e.target.value;

        this.setState({
            veriPass: newVeri
        });

        if(newVeri === password) {
            this.setState({
                passMatch: true
            })
        }
    }

    //track email change using value attribute and corresponding state property
    handleFirstVal=(e)=>{
        let firstName = e.target.value;

        this.setState({
            firstName: firstName
        });
    }

    //track email change using value attribute and corresponding state property
    handleLastVal=(e)=>{
        let lastName = e.target.value;

        this.setState({
            lastName: lastName
        });
    }
    

    render() {

        const {username, password, veriPass, email, firstName, lastName, passMatch, userData} = this.state;
            
        const currUser = this.props.user;

        return (
            <div style={{ display: 'flex', padding: 30, backgroundColor: 'Black'}}>
                <div className="setForm" style={{margin: '0 auto'}}>
                    <h2 style={{textAlign: 'center', 
                                paddingTop: 30, 
                                paddingBottom: 30, 
                                color: 'whitesmoke'}}
                    >   User Account
                    </h2>
                <Form >
                    <fieldset  style={{borderRadius: 4, padding: 10}}>
                        <Form.Group className="formGroup" >
                            <Form.Label as="legend">Username</Form.Label>
                            <br></br>
                            <Form.Control 
                                type="text" 
                                placeholder={userData.username} 
                                className="formControl"
                                value={username}
                                defaultValue={userData.username}
                                onChange={this.handleUserChange}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group className="formGroup" >
                            <Form.Label as="legend">First Name</Form.Label>
                            <br></br>
                            <Form.Control 
                                type="text" 
                                placeholder={userData.first_name} 
                                className="formControl"
                                defaultValue={userData.first_name} 
                                value={firstName}
                                onChange={this.handleFirstVal}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group className="formGroup" >
                            <Form.Label as="legend">Last Name</Form.Label>
                            <br></br>
                            <Form.Control 
                                type="text" 
                                placeholder={userData.last_name} 
                                className="formControl"
                                value={lastName}
                                defaultValue={userData.last_name}
                                onChange={this.handleLastVal}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group className="formGroup" >
                            <Form.Label as="legend">Email</Form.Label>
                            <br></br>
                            <Form.Control 
                                type="text" 
                                placeholder={userData.email} 
                                className="formControl"
                                value={email}
                                defaultValue={userData.email}
                                onChange={this.handleEmailChange}
                            />
                        </Form.Group>
                        <Form.Group className="formGroup" >
                            <Form.Label 
                            as="legend"
                            //style={passMatch ? {backgroundColor: '#0fec3456'} : {backgroundColor: '#ec300f56'}}
                            >
                                Password
                            </Form.Label>
                            <br></br>
                            <Form.Control 
                                type="password" 
                                placeholder="old password" 
                                className="formControl"
                                value={password}
                                onChange={this.handlePassChange}
                                style={passMatch ? {backgroundColor: '#0fec34be'} : {backgroundColor: '#ec0f0fa8'}}
                            />
                        </Form.Group>
                        <Form.Group className="formGroup" >
                            <Form.Label 
                                as="legend" 
                            >
                                Verify Password
                            </Form.Label>
                            <br></br>
                            <Form.Control 
                                type="password" 
                                placeholder="new password" 
                                className="formControl"
                                value={veriPass}
                                onChange={this.handleVeriChange}
                                style={passMatch ? {backgroundColor: '#0fec34be'} : {backgroundColor: '#ec0f0fa8'}}
                            />
                        </Form.Group>
                    </fieldset>
                        <br></br>
                        <div style={{display: 'flex', padding: 20}}>
                            
                        <button type="button" className="build-btn" style={{marginRight: 'auto', marginLeft: 'auto'}} onClick={this.handleAccUpdate}>
                            UPDATE
                        </button>
                        </div>
                    </Form>
                </div>
            </div>

        )
    }
}

export default withRouter(AccountTable);
