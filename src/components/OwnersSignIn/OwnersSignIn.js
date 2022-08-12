import React, {Component} from 'react';
import './OwnersSignIn.css';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Navigate} from 'react-router-dom';

//Define a Login Component
class OwnersSignIn extends Component{
    //call the constructor method
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            fields: {},
            errors: {},
            formIsValid: true,
            failureMsg: '',
            ownersSignFlag : false
        }
        //Bind the handlers to this class
        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
        this.setState({
            ownersSignFlag : false,
            fields: {},
            errors: {},
            formIsValid: true,
            failureMsg: '',
        })
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
    }

    onSubmit(event) {
        event.preventDefault();
    }
      /* callback to change the checkboxState to false when the checkbox is checked */
    toggle(event) {
        this.setState({
            checkboxState: !this.state.checkboxState
        });
    }
    //submit Login handler to send a request to the node backend
    submitLogin = (e) => {
        //var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();

        if (this.validateForm()) {
            let fields = {};
            fields["emailID"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            console.log("No errors");   
        }
        console.log("form valid222: ", this.state.formIsValid);
        if (this.state.formIsValid) {
            const data = {
                emailID : this.state.fields["emailID"],
                password : this.state.fields["password"]
            }
    
            console.log("Data: ", data);
            //set the with credentials to true
            axios.defaults.withCredentials = true;
            //make a post request with the user data
            axios.post('http://localhost:3001/OwnersSignIn',data)
                .then(response => {
                    console.log("Status Code : ",response.status);
                    if(response.status === 200){
                        this.setState({
                            ownersSignFlag : true
                        })
                    } else {
                        this.setState({
                            ownersSignFlag : false
                        })
                    }
                });
            }
    }

    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        //this.state.formIsValid = true;
        this.setState({
            formIsValid : true
          });
        
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
          
        console.log("form valid: ", this.state.formIsValid);
        return this.state.formIsValid;
    }

    render(){
        //redirect based on successful login
        let redirectVar = null;
        console.log("this.state.ownersSignFlag:", this.state.ownersSignFlag)
        if(this.state.ownersSignFlag){
            redirectVar = <Navigate to= "/ListProperty"/>
        } 
        if (!this.state.ownersSignFlag) {
            //this.state.failureMsg = "*Invalid Username/Password"
            this.setState({
                failureMsg : "*Invalid Username/Password"
              });
            console.log("FailureMsg: ", this.state.failureMsg);
        }
        const checkedOrNot = [];
        checkedOrNot.push(
            <p>{this.state.checkboxState ? 'Unchecked' : 'Checked'}</p>
        );
        const checkbox = (
            <span>
                <input 
                    type="checkbox"
                    onClick={this.toggle.bind(this)}
                    checked
                />
                 Keep me Signed in
            </span>
        );
        return(
            <div class="owners-first-div">
                {redirectVar}
                <div class="row owners-row">
                    <div class="col-sm-11">
                        <img class="signin-image1" height="60" width="175" alt='' src={require("../Images/logo3.png")}/>
                    </div>
                    <div class="col-sm-1">
                        <img height="60" width="70" alt='' src={require("../Images/logo1.png")}/>
                    </div>
                </div>
                <div class="owners-container">
                    <div class="owners-div-left">
                        <img height="300" width="420" alt='' src={require('../Images/home1.png')}/>
                    </div>
                    <div class="owners-div-right">
                        <div class="container"> 
                            <div class="owners-form">
                                <div class="owners-main-div">
                                    <h1>Owner Login</h1>
                                    <h3>Need an account? <a href='/OwnersSignUpEmail'>SignUp</a></h3>
                                    <div class="form-group">
                                        <input onChange={this.handleChange} type="email" value={this.state.fields.emailID} class="form-control" name="emailID" placeholder="Email address"/>
                                        <div className="errorMsg">{this.state.errors.emailID}</div> 
                                    </div>
                                    <div class="form-group">
                                        <input onChange={this.handleChange} type="password" value={this.state.fields.password} class="form-control" name="password" placeholder="Password"/>
                                        <div className="errorMsg">{this.state.errors.password}</div>  
                                    </div>
                                    <div class="owners-pwd-div">
                                        <p><a href='/SignUp'>Forgot password?</a></p>
                                    </div>
                                    <button onClick = {this.submitLogin} class="owners-btn">Log In</button> 
                                    <div className="errorMsg">{this.state.failureMsg}</div>
                                    <div class="owners-checkbox-div">
                                        <form onSubmit={this.onSubmit.bind(this)}>
                                            {checkbox}
                                        </form>
                                    </div>
                                    <h5 class='owners-msg1-div'>Want to list your property? <a href="/SignUp">Learn More</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div class='owners-lastmsg-div'>
                        <h7>Use of this Web site constitutes acceptance of the HomeAway.com Terms and Conditions and Privacy Policy.</h7><br></br>
                        <h7>©2018 HomeAway. All rights reserved.</h7>
                    </div> 
            </div>
        )
    }
}

//export Login Component
export default OwnersSignIn;

