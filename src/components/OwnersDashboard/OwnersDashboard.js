import React, {Component} from 'react';
import './OwnersDashboard.css';
//import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
//import DetailsComponent from '../DetailsView/DetailsComponent';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

//Define a Login Component
class OwnersDashboard extends Component{
    render(){
        return(
            <div class="ownersdash-first-div">
                <div class="row ownersdash-row">
                    <div class="col-sm-1">
                        <span class="glyphicon glyphicon-align-left ownersdash-glyphicon1"></span>
                    </div>
                    <div class="col-sm-4">
                        {/*<img class="ownersdash-img1" height="40" width="175" src={require("../Images/Homeaway_logo.png")}/>*/}
                        <label class="ownersdash-col1">HomeAway</label>
                    </div>    
                    <div class="col-sm-2 ownerdash-dropdown1">
                       <DropdownButton bsStyle="link" title="Trip Boards">
                            <Dropdown.Item eventKey="1"><Link to="/OwnersDashboardAll">Listed Property</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/OwnersDashboardBooked">Booked Property</Link></Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div class="col-sm-2 ownersdash-col2">
                        <Link to="/ListProperty" class="ownersdash-col2">Add new property</Link>
                    </div>
                    <div class="col-sm-2">
                        <Link to="/" class="ownersdash-col3"><span class="glyphicon glyphicon-log-out listglyphicon2"></span> Sign Out</Link>
                    </div>
                    <div class="col-sm-1">
                        <span class="glyphicon glyphicon-th ownersdash-glyphicon1"></span>
                    </div>
                </div>
                <div class="ownerdash-sec-div">
                    <h1>Trip Boards</h1>
                    <h2>Trip Boards help you keep track of the places you love.</h2>
                </div>
                <div class="ownerdash-third-div">
                    <h3>You will look at all the properties listed by the Owner </h3>
                    <h3>You will look at all the properties booked by the Traveler </h3>
                </div>
            </div>
                          
        )
    }
}

//export Login Component
export default OwnersDashboard;

