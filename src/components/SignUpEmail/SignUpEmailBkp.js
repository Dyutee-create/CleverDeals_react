import React, {Component} from 'react';
import './SignUpEmail.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Navigate} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

//Define a Login Component
class SignUpEmail extends Component{
    //call the constructor method
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            firstname : "",
            lastname : "",
            emailID : "",
            password : "",
            authFlag : false
        }
        //Bind the handlers to this class
        this.fNameChangeHandler = this.fNameChangeHandler.bind(this);
        this.lNameChangeHandler = this.lNameChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
        this.setState({
            authFlag : false
        })
    }

    fNameChangeHandler = (e) => {
        this.setState({
            firstname : e.target.value
        })
    }

    lNameChangeHandler = (e) => {
        this.setState({
            lastname : e.target.value
        })
    }
     //username change handler to update state variable with the text entered by the user
    emailChangeHandler = (e) => {
        this.setState({
            emailID : e.target.value
        })
    }
    //password change handler to update state variable with the text entered by the user
    passwordChangeHandler = (e) => {
        this.setState({
            password : e.target.value
        })
    }
    //submit Login handler to send a request to the node backend
    submitLogin = (e) => {
        // var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
        const data = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            emailID : this.state.emailID,
            password : this.state.password
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3000/signupemail',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    this.setState({
                        authFlag : true
                    })
                }else{
                    this.setState({
                        authFlag : false
                    })
                }
            });
    }

    render(){
        //redirect based on successful login
        let redirectVar = null;
        if(cookie.load('cookie')){
            redirectVar = <Navigate to= "/ThankYou"/>
        }
        return(
            <div class="signupemail-first-div">
                {redirectVar}
                <div class="row signupemail-row">
                    <div class="col-sm-11">
                        <img class="signupemail-image1" height="60" width="175" alt='Signup email logo' src={require("../Images/logo3.png")}/>
                    </div>
                    <div class="col-sm-1">
                        <img height="60" width="70" alt='Signup email logo' src={require("../Images/logo1.png")}/>
                    </div>
                </div>
                <div class="container">
                    <div class="signupemail-entire-thing">
                        <div class="signupemail-header">
                            <h1>Sign up for HomeAway</h1> 
                            <h4>Already have an account? <a href="/SignIn">Log in</a></h4>
                        </div>
                        <div class="signupemail-form">
                            <div class="signupemail-div"> 
                                <div class="form-group">
                                    <div class="signupemail-ad-left">
                                        <input onChange = {this.fNameChangeHandler} type="email" class="form-control" name="firstname" placeholder="First Name"/>
                                    </div>
                                    <div class="signupemail-ad-right">
                                        <input onChange = {this.lNameChangeHandler} type="email" class="form-control" name="lastname" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input onChange = {this.emailChangeHandler} type="email" class="form-control" name="emailID" placeholder="Email address"/>
                                </div>
                                <div class="form-group">
                                    <input onChange = {this.passwordChangeHandler} type="password" class="form-control" name="password" placeholder="Password"/>
                                </div>
                                <button onClick = {this.submitLogin} class="signupemail-btn">Sign me Up</button>  
                                <p class='signupemail-line-div'>or</p>
                                <div>
                                    <label><img class="signupemail-fb" height="49" width="330" alt='Signup fb logo' src={require('../Images/fb.png')}/></label>
                                    <label><img class="signupemail-google" height="48" width="330" alt='Signup google logo'  src={require('../Images/google.png')}/></label>             
                                </div>
                                <h6 class='signupemail-msg1-div'>We don't post anything without your permission.</h6>
                                <h6 class='signupemail-msg1-div'>By creating an account you are accepting our Terms and Conditions and Privacy Policy.</h6>
                            </div>
                        </div>
                        <div class='signupemail-lastmsg-div'>
                            <h7>Use of this Web site constitutes acceptance of the HomeAway.com Terms and Conditions and Privacy Policy.</h7><br></br>
                            <h7>©2018 HomeAway. All rights reserved.</h7>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//export Login Component
export default SignUpEmail;

