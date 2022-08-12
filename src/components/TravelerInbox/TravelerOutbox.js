import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// import cookie from 'react-cookies';
// import {Redirect} from 'react-router';
//import { Dropdown.Item , DropdownButton} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import axios from 'axios';
import './TravelerInbox.css';
import TravelerInboxComponent from './TravelerInboxComponent';

class TravelerOutbox extends Component {
   
    constructor(){
        super();
        this.state = {
            message : [],
            travelerInboxFlag : false
        }
    }

    //get the books data from backend  
    componentDidMount(){
        axios.get('http://localhost:3000/TravelerOutbox')
                .then((response) => {
                    console.log("response",response.data);
                //update the state with the response data
                this.setState({
                    message : this.state.message.concat(response.data),
                });
                console.log("Messages within Travelers Outbox",this.state.message);
            });
    }

    render(){  
        let travMessage = this.state.message.map(message => {
            return (
                <TravelerInboxComponent>{message.message}{message.emailID}{message.firstName}{message.lastName}</TravelerInboxComponent>
            )
        })

        console.log("TravelerMessage: ", travMessage);
    
        return(
            <div class="travelerinbox-first-div">
                <div class="row travelerinbox-row1">
                    <div class="col-sm-5">
                        <Link to="/"><img height="50" width="175" alt='' src={require("../Images/HomeAway.png")}/></Link>
                    </div>
                    <div class="col-sm-2 travelerinbox-col2">
                        <Link to="./TravelerDashboard">Trip Boards</Link>
                    </div>
                    <div class="col-sm-2 travelerinbox-dropdown1">
                        <DropdownButton bsStyle="primary" title="My Account">
                            <Dropdown.Item  eventKey="1"><Link to="/TravelLogin">Homepage</Link></Dropdown.Item >
                            <Dropdown.Item  eventKey="2"><Link to="/TraverlerDashboard">My trips</Link></Dropdown.Item >
                            <Dropdown.Item  eventKey="3"><Link to="/UserProfile">My profile</Link></Dropdown.Item >
                            <Dropdown.Divider />
                            <Dropdown.Item  eventKey="5"><Link to="/OwnersDashboard">Owners Dashboard</Link></Dropdown.Item >
                            <Dropdown.Divider />
                            <Dropdown.Item  eventKey="6"><Link to="/" class="glyphicon glyphicon-log-out"> Logout</Link></Dropdown.Item >
                        </DropdownButton>
                    </div>
                    <div class="col-sm-2">
                        <button class="travelerinbox-nav-btn"><Link to="./ListProperty">List your property</Link></button>
                    </div>
                    <div class="col-sm-1 travelerinbox-logo-col2">
                        <img height="50" width="50" alt='' src={require("../Images/logo1.png")}/>
                    </div>
                </div>
                <div class="row travelerinbox-row2">
                    <div class="col-sm-1">
                    
                    </div>
                    <div class="col-sm-1">
                        <label><Link to="/TravelerInbox">Inbox</Link></label>
                    </div>
                    <div class="col-sm-1">
                        <label><Link to="/TravelerInbox">Outbox</Link></label>
                    </div>
                    <div class="col-sm-1">
                        <label><Link to="/TraverlerDashboard">My Trips</Link></label>
                    </div>
                    <div class="col-sm-1">
                        <label><Link to="/UserProfile">Profile</Link></label>
                    </div>
                    <div class="col-sm-7">

                    </div>
                </div>
                <div class="travelerinbox-form">
                    <div class="travelerinbox-main-div">
                        <div class="form-group">
                            <div class="travelerinbox-sent">
                                <h3>Messages sent: </h3>
                                {travMessage}
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default TravelerOutbox;