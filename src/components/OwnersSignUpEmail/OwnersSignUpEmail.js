import React, {Component} from 'react';
import './OwnersSignUpEmail.css';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Define a Login Component
class OwnersSignUpEmail extends Component{
    //call the constructor method
    constructor(){
        //Call the constrictor of Super class i.e The Component
        super();
        //maintain the state required for this component
        this.state = {
            fields: {},
            errors: {},
            formIsValid: true,
            ownerssignupFlag : false
        }
        //Bind the handlers to this class
        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
        this.setState({
            ownerssignupFlag : false,
            fields: {},
            errors: {},
            formIsValid: true,
        })
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
    }

    //submit Login handler to send a request to the node backend
    submitLogin = (e) => {
        //var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();

        if (this.validateForm()) {
            let fields = {};
            fields["firstname"] = "";
            fields["lastname"] = "";
            fields["emailID"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            console.log("No errors");
        }

        console.log("form valid222: ", this.state.formIsValid);
        if (this.state.formIsValid) {
            const data = {
                firstname : this.state.fields["firstname"],
                lastname : this.state.fields["lastname"],
                emailID : this.state.fields["emailID"],
                password : this.state.fields["password"]
            }

            console.log("Data: ", data);
            //set the with credentials to true
            axios.defaults.withCredentials = true;
            //make a post request with the user data
            axios.post('http://localhost:3001/OwnersSignUpEmail',data)
                .then(response => {
                    console.log("Status Code : ",response.status);
                    if(response.status === 200){
                        this.setState({
                            ownerssignupFlag : true
                        })
                    } else {
                        this.setState({
                            ownerssignupFlag : false
                        })
                    }
                });
        }   
    }

    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        //this.state.formIsValid = "true";
        this.setState({
            formIsValid : true
        });

        if (!fields["firstname"]) {
            //this.state.formIsValid = false;
            this.setState({
                formIsValid : false
            });
            errors["firstname"] = "*Please enter your firstname.";
        }
    
        if (typeof fields["firstname"] !== "undefined") {
            if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
              //this.state.formIsValid = false;
              this.setState({
                formIsValid : false
            });
              errors["firstname"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["lastname"]) {
            //this.state.formIsValid = false;
            this.setState({
                formIsValid : false
            });
            errors["lastname"] = "*Please enter your lastname.";
        }
    
        if (typeof fields["lastname"] !== "undefined") {
            if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
              //this.state.formIsValid = false;
              this.setState({
                formIsValid : false
            });
              errors["lastname"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["emailID"]) {
            //this.state.formIsValid = false;
            this.setState({
                formIsValid : false
            });
            errors["emailID"] = "*Please enter your email-ID.";
        }
    
        if (typeof fields["emailID"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailID"])) {
              //this.state.formIsValid = false;
              this.setState({
                formIsValid : false
            });
              errors["emailID"] = "*Please enter valid email-ID.";
            }
        }
        
        if (!fields["password"]) {
            //this.state.formIsValid = false;
            this.setState({
                formIsValid : false
            });
            errors["password"] = "*Please enter your password.";
        }
    
        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
              //this.state.formIsValid = false;
              this.setState({
                formIsValid : false
            });
              errors["password"] = "*Please enter secure and strong password. Password should have One Uppercase, One special character [@#$%&], One digit and minimum 8 characters long.";
            }
        }
    
        this.setState({
            errors: errors
        });
        return this.state.formIsValid;
    
    }

    render(){
        //redirect based on successful login
        let redirectVar = null;
        if(this.state.ownerssignupFlag){
            redirectVar = <Navigate to= "/ListProperty"/>
        }
        return(
            <div class="ownerssignupemail-first-div">
                {redirectVar}
                <div class="row ownerssignupemail-row">
                    <div class="col-sm-11">
                        <img class="ownerssignupemail-image1" height="60" width="175" alt='' src={require("../Images/logo3.png")}/>
                    </div>
                    <div class="col-sm-1">
                        <img height="60" width="70" alt='' src={require("../Images/logo1.png")}/>
                    </div>
                </div>
                <div class="container">
                    <div class="ownerssignupemail-entire-thing">
                        <div class="ownerssignupemail-header">
                            <h1>Sign up for HomeAway</h1> 
                            <h4>Already have an account? <a href="/SignIn">Log in</a></h4>
                        </div>
                        <div class="ownerssignupemail-form">
                            <div class="ownerssignupemail-div"> 
                                <form name="loginForm" onSubmit={this.onSubmit}>
                                    <div className="form-group-collection">
                                        <div className="form-group">
                                            <div class="ownerssignupemail-ad-left">
                                                <input onChange = {this.handleChange} type="text" value={this.state.fields.firstname} class="form-control" name="firstname" placeholder="First Name"/>
                                                <div className="errorMsg">{this.state.errors.firstname}</div>
                                            </div>
                                            <div class="ownerssignupemail-ad-right">
                                                <input onChange = {this.handleChange} type="text" value={this.state.fields.lastname} class="form-control" name="lastname" placeholder="Last Name" />
                                                <div className="errorMsg">{this.state.errors.lastname}</div>    
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input onChange = {this.handleChange} type="email" value={this.state.fields.emailID} class="form-control" name="emailID" placeholder="Email address"/>
                                            <div className="errorMsg">{this.state.errors.emailID}</div>    
                                        </div>
                                        <div className="form-group">
                                            <input onChange = {this.handleChange} type="password" value={this.state.fields.password} class="form-control" name="password" placeholder="Password"/>
                                            <div className="errorMsg">{this.state.errors.password}</div>   
                                        </div>
                                    </div>
                                    <button onClick = {this.submitLogin} class="ownerssignupemail-btn">Sign me Up</button>  
                                </form>
                                <p class='ownerssignupemail-line-div'>or</p>
                                <div>
                                    <label><img class="ownerssignupemail-fb" height="49" width="330" alt='' src={require('../Images/fb.png')}/></label>
                                    <label><img class="ownerssignupemail-google" height="48" width="330" alt='' src={require('../Images/google.png')}/></label>             
                                </div>
                                <h6 class='ownerssignupemail-msg1-div'>We don't post anything without your permission.</h6>
                                <h6 class='ownerssignupemail-msg1-div'>By creating an account you are accepting our Terms and Conditions and Privacy Policy.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='ownerssignupemail-lastmsg-div'>
                    <h7>Use of this Web site constitutes acceptance of the HomeAway.com Terms and Conditions and Privacy Policy.</h7><br></br>
                    <h7>©2022 HomeAway. All rights reserved.</h7>
                </div>
            </div>
        
        )
    }
}

export default OwnersSignUpEmail;