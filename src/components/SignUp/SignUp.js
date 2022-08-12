import React, {Component} from 'react';
import './SignUp.css';
// import axios from 'axios';
// import cookie from 'react-cookies';
// import {Redirect} from 'react-router';
// import {Link}from 'react-router-dom';

//Define a Login Component
class SignUp extends Component{
    render(){
        return(
            <div class='signup-first-div'>
                <div class="row signup-row">
                    <div class="col-sm-11">
                        <img class="signup-image1" height="60" width="175" alt='' src={require("../Images/logo3.png")}/>
                    </div>
                    <div class="col-sm-1">
                        <img height="60" width="70" alt='' src={require("../Images/logo1.png")}/>
                    </div>
                </div>
                <div class="container">
                    <div class="signup-header">
                        <h1>Sign up for HomeAway</h1>
                        <h4>Already have an account? <a href='/SignIn'>Log in</a></h4>
                    </div>
                    <div class="signup-form">
                        <div class="signup-div">
                            <button class="signup-btn"><a href='/SignUpEmail'>Sign up with email</a></button>
                            <p class='signup-line-div'>or</p>
                            <div>
                            <label><img class="signup-fb" height="49" width="320" alt='' src={require('../Images/fb.png')}/></label>
                            <label><img class="signup-google" height="48" width="320" alt='' src={require('../Images/google.png')}/></label>             
                            </div>
                        <h6 class='signup-msg1-div'>We don't post anything without your permission.</h6>
                        <h6 class='signup-msg1-div'>By creating an account you are accepting our Terms and Conditions and Privacy Policy.</h6>
                        </div>
                    </div>  
                    <div class='signup-lastmsg-div'>
                        <h7>Use of this Web site constitutes acceptance of the HomeAway.com Terms and Conditions and Privacy Policy.</h7><br/>
                        <h7>©2018 HomeAway. All rights reserved.</h7>
                </div>
                </div>
            </div>
        )
    }
}

//export Login Component
export default SignUp;

