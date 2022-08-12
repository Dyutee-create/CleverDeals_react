import React,{Component} from 'react';
import './AskQuestion.css';
//import {Link} from 'react-router-dom';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
import { Navigate } from 'react-router-dom';


class AskQuestion extends Component {
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            checkin : "",
            checkout : "",
            guests : "",
            firstName : "",
            lastName: "",
            emailID: "",
            phonenum: "",
            message: "",
            askQuestionFlag : false
        }
        //Bind the handlers to this class
        this.checkinChangeHandler = this.checkinChangeHandler.bind(this);
        this.checkoutChangeHandler = this.checkoutChangeHandler.bind(this);
        this.guestsChangeHandler = this.guestsChangeHandler.bind(this);
        this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this);
        this.lastNameChangeHandler = this.lastNameChangeHandler.bind(this);
        this.emailIDChangeHandler = this.emailIDChangeHandler.bind(this);
        this.phonenumChangeHandler = this.phonenumChangeHandler.bind(this);
        this.messageChangeHandler = this.messageChangeHandler.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    componentWillMount(){
        this.setState({
            askQuestionFlag : false
        })
    }
    
    checkinChangeHandler = (e) => {
        this.setState({
            checkin : e.target.value
        })
    }
    checkoutChangeHandler = (e) => {
        this.setState({
            checkout : e.target.value
        })
    }
    guestsChangeHandler = (e) => {
        this.setState({
            guests : e.target.value
        })
    }
    firstNameChangeHandler = (e) => {
        this.setState({
            firstName : e.target.value
        })
    }
    lastNameChangeHandler = (e) => {
        this.setState({
            lastName : e.target.value
        })
    }
    emailIDChangeHandler = (e) => {
        this.setState({
            emailID : e.target.value
        })
    }
    phonenumChangeHandler = (e) => {
        this.setState({
            phonenum : e.target.value
        })
    }
    messageChangeHandler = (e) => {
        this.setState({
            message : e.target.value
        })
    }
    
    submitLogin = (e) => {
        //var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
        const data = {
            checkin : this.state.checkin,
            checkout : this.state.checkout,
            guests : this.state.guests,
            firstName : this.state.firstName,
            lastName: this.state.lastName,
            emailID: this.state.emailID,
            phonenum: this.state.phonenum,
            message: this.state.message
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3000/AskQuestion',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    this.setState({
                        askQuestionFlag : true
                    })
                }else{
                    this.setState({
                        askQuestionFlag : false
                    })
                }
            });
    }

    render(){   
        let redirectVar = null;
        if(this.state.askQuestionFlag){
            redirectVar = <Navigate to= "/TravelLogin"/>
            console.log(redirectVar);
        }
        return(
            <div class="askquestion-firstdiv">
                {redirectVar}
                    <h3>Ask Owner a Question</h3>
                        <div className="container">
                            <div class="askquestion-form">
                                <div class="askquestion-div">
                                <div className="form-group-collection">
                                    <h4>Checkin and Checkout</h4>
                                    <div className="form-group">
                                        <div class="askquestion-ad-left">
                                            <input onChange = {this.checkinChangeHandler} type="date" name="checkin" class="form-control" placeholder="Checkin"/>
                                        </div>
                                        <div class="askquestion-ad-right">
                                            <input onChange = {this.checkoutChangeHandler} type="date" name="checkout" class="form-control" placeholder="Checkout"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input onChange = {this.guestsChangeHandler} type="text" name="guests" class="form-control" placeholder="Guests"/>
                                    </div>
                                    <div className="form-group">
                                        <input onChange = {this.firstNameChangeHandler} type="text" name="firstName" class="form-control" placeholder="Enter First Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input onChange = {this.lastNameChangeHandler} type="text" name="lastName" class="form-control" placeholder="Enter Last Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input onChange = {this.emailIDChangeHandler} type="text" name="emailID" class="form-control" placeholder="Email ID"/>
                                    </div>
                                    <div className="form-group">
                                        <input onChange = {this.phonenumChangeHandler} type="text" name="phonenum" class="form-control" placeholder="Phone Number"/>
                                    </div>
                                    <div className="form-group">
                                        <input onChange = {this.messageChangeHandler} type="text" name="message" class="form-control1" placeholder="Enter the message to be sent to owner"/>
                                    </div>
                                </div>
                                <div class="askquestion-lastmsg">
                                    <h6>By clicking 'Send Email' you are agreeing to our Terms and Conditions, Privacy Policy, and receiving booking-related texts. Standard messaging rates may apply.</h6>
                                </div>
                                <div>
                                    <button onClick = {this.submitLogin} class="askquestion-btn">Send</button>
                                </div>
                                </div>
                            </div>
                        </div>
                
            </div>
        )
    }
}

export default AskQuestion;