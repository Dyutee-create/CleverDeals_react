import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//import cookie from 'react-cookies';
//import {Navigate} from 'react-router-dom';
// import { MenuItem, DropdownButton} from 'react-bootstrap';
import axios from 'axios';
import './OwnersInbox.css';
import OwnersInboxComponent from './OwnersInboxComponent';


class OwnersOutbox extends Component {
   
    constructor(){
        super();
        this.state = {
            message : []
        }
    }

      //get the books data from backend  
      componentDidMount(){
        axios.get('http://localhost:3001/OwnersOutbox')
                .then((response) => {
                    console.log("response",response.data);
                //update the state with the response data
                this.setState({
                    message : this.state.message.concat(response.data),
                });
                console.log("Messages within Owners Inbox",this.state.message);
            });
    }

    render(){  
        let travMessage = this.state.message.map(message => {
            return (
                <OwnersInboxComponent>{message.ownersMsg}{message.ownersEmailID}{message.ownersFirstName}{message.ownersLastName}{message.msgID}</OwnersInboxComponent>
            )
        })
        console.log("TravelerMessage: ", travMessage);
    
        return(
            <div class="ownersinbox-first-div">
                <div class="row ownersinbox-row1">
                    <div class="col-sm-5">
                        <Link to="/"><img height="50" width="175" alt='' src={require("../Images/HomeAway.png")}/></Link>
                    </div>
                    <div class="col-sm-2 ownersinbox-col2">
                        <Link to="./OwnersDashboard">Dashboard</Link>
                    </div>
                    <div class="col-sm-1 ownersinbox-col2">
                        <Link to="/OwnersInbox">Inbox</Link>
                    </div>
                    <div class="col-sm-1 ownersinbox-col2">
                        <Link to="/OwnersOutbox">Outbox</Link>
                    </div>
                    <div class="col-sm-2">
                        <button class="ownersinbox-nav-btn"><Link to="./ListProperty">List your property</Link></button>
                    </div>
                    <div class="col-sm-1 ownersinbox-logo-col2">
                        <img height="50" width="50" alt='' src={require("../Images/logo1.png")}/>
                    </div>
                </div>
                <div class="ownersinbox-form">
                    <div class="ownersinbox-main-div">
                        <div class="form-group">
                            <div class="ownersinbox-sent">
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

export default OwnersOutbox;