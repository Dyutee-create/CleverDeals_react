import React,{Component} from 'react';
import './OwnersInbox.css';
//import {Link} from 'react-router-dom';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Navigate} from 'react-router-dom';
// import { MenuItem, Button, DropdownButton} from 'react-bootstrap';

class OwnersReply extends Component {
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            emailID: "",
            phonenum: "",
            message: "",
            firstName: "",
            lastName: "",
            msgDetails: [],
            ID : props.location.state,
            ownerReplyFlag : false
        }
        //Bind the handlers to this class
        this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this);
        this.lastNameChangeHandler = this.lastNameChangeHandler.bind(this);
        this.emailIDChangeHandler = this.emailIDChangeHandler.bind(this);
        this.phonenumChangeHandler = this.phonenumChangeHandler.bind(this);
        this.messageChangeHandler = this.messageChangeHandler.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    componentWillMount(){
        console.log("Message ID : ", this.state.ID.id);
        axios.get(`http://localhost:3001/OwnersReply`, {
            params: {
                id: `${this.state.ID.id}`
            }
        })
            .then((response) => {
                console.log("response",response.data);
                //update the state with the response data
                this.setState({
                    msgDetails : this.state.msgDetails.concat(response.data) 
                });
                console.log("msgDetails",this.state.msgDetails);
            });
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailID: this.state.emailID,
            phonenum: this.state.phonenum,
            message: this.state.message,
            outputID: this.state.ID.id
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/OwnersReply',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    this.setState({
                        ownerReplyFlag : true
                    })
                }else{
                    this.setState({
                        ownerReplyFlag : false
                    })
                }
            });
    }

    render(){   
        let msgOriginal = this.state.msgDetails.map(msgDetails => {
            return(
                <tr>{msgDetails.message}</tr>
            )
        })
        let msgemailID = this.state.msgDetails.map(msgDetails => {
            return(
                <tr>{msgDetails.emailID}</tr>
            )
        })
        console.log("Message: ", msgOriginal, msgemailID)

        let redirectVar = null;
        if(this.state.ownerReplyFlag){
            redirectVar = <Navigate to= "/OwnersOutbox"/>
            console.log(redirectVar);
        }
        return(
            <div class="reply-firstdiv">
                {redirectVar}
                    <h1>Reply to the traveler</h1>
                        <div className="container">
                            <div class="reply-form">
                                <div class="reply-div">
                                    <div className="form-group-collection">
                                        <div className="form-group">
                                            <h3 class="h3-header">Firstname: </h3>
                                            <input onChange = {this.firstNameChangeHandler} type="text" name="firstName" class="form-control" placeholder="Enter First Name"/>
                                        </div>
                                        <div className="form-group">
                                            <h3 class="h3-header">LastName: </h3>
                                            <input onChange = {this.lastNameChangeHandler} type="text" name="lastName" class="form-control" placeholder="Enter Last Name"/>
                                        </div>
                                        <div className="form-group">
                                            <h3 class="h3-header">From: </h3>
                                            <input onChange = {this.emailIDChangeHandler} type="text" name="emailID" class="form-control" placeholder="Enter Email ID"/>
                                        </div>
                                        <div className="form-group">
                                            <h3 class="h3-header">To: </h3>
                                            <h4 class="h4-header">{msgemailID}</h4>
                                        </div>
                                        <div className="form-group">
                                            <h3 class="h3-header">Phone Number: </h3>
                                            <input onChange = {this.phonenumChangeHandler} type="text" name="phonenum" class="form-control" placeholder="Phone Number"/>
                                        </div>
                                        <div>
                                            <h3 class="h3-header">Message from traveler: </h3>
                                            <h4 class="h4-header">{msgOriginal}</h4>
                                        </div>
                                        <div className="form-group">
                                            <h3 class="h3-header">Reply to the customer: </h3>
                                            <input onChange = {this.messageChangeHandler} type="text" name="message" class="form-control" placeholder="Enter the message to be sent to the customer"/>
                                        </div>
                                    </div>
                                <div>
                                    <button onClick = {this.submitLogin} class="reply-btn">Reply</button>
                                </div>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}

export default OwnersReply;