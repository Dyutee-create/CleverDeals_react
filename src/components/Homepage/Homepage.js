import React,{Component} from 'react';
import './Homepage.css';
import {Link} from 'react-router-dom';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import { MenuItem, DropdownButton} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class Homepage extends Component {  
    render(){ 
        return(
            <div class="homepage-first-div">
                <div class="row homepage-row1">
                    <div class="col-sm-5 homepage-logo-col">
                       <label>HomeAway</label>
                    </div>
                    <div class="col-sm-2 homepage-tripboard">
                        <DropdownButton bsStyle="link"  title="Trip Boards">
                            <Dropdown.Item eventKey="1"><Link to="/TravelerDashboard/TravelerDashboard">Travelers Dashboard</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/OwnersDashboard">Owners Dashboard</Link></Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div class="col-sm-1 homepage-dropdown1">
                        <DropdownButton bsStyle="link"  title="Login">
                            <Dropdown.Item eventKey="1"><Link to="/SignIn">Travelers Login</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/OwnersSignIn">Owners Login</Link></Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div class="col-sm-1 homepage-dropdown2">
                        <DropdownButton bsStyle="link"  title="Help" >
                            <Dropdown.Item eventKey="1">Visit help center</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">Travelers</Dropdown.Item>
                            <Dropdown.Item eventKey="3">How it works</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Security Center</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="5">Homeowners</Dropdown.Item>
                            <Dropdown.Item eventKey="6">How it works</Dropdown.Item>
                            <Dropdown.Item eventKey="7">List your property</Dropdown.Item>
                            <Dropdown.Item eventKey="8">Community</Dropdown.Item>
                            <Dropdown.Item eventKey="9">Discovery Hub</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="10">Property managers</Dropdown.Item>
                            <Dropdown.Item eventKey="11">List your properties</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div class="col-sm-2">
                        <button class="homepage-nav-btn"><Link to="./ListProperty">List your property</Link></button>
                    </div>
                    <div class="col-sm-1 homepage-logo-col2">
                        <img height="50" width="50" src={require("../Images/logo10.png")} alt =''/>
                    </div>
                </div>
                <div class="homepage-form">
                    <div class="homepage-div">
                        <h1 class="homepage-h1">Book beach houses, cabins,</h1>
                        <h1 class="homepage-h1">condos and more, worldwide</h1>
                        <div className="container">
                            <div className="row homepage-row2">
                                <div class="col-sm-4">
                                    <input type="text" name="input1" class="form-control" placeholder="Where do you want to go?"/>   
                                </div>
                                <div class="col-sm-1 homepage-col">
                                    <input type="text" name="input2" class="form-control" placeholder="Arrive"/> 
                                </div>
                                <div class="col-sm-1 homepage-col">
                                    <input type="text" name="input3" class="form-control" placeholder="Depart"/>
                                </div>
                                <div class="col-sm-1 homepage-col">
                                    <input type="text" name="input4" class="form-control" placeholder="Guests"/>   
                                </div>
                                <div class="col-sm-2 homepage-col"> 
                                    <button type="button" class="btn btn-primary btn-homepage">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row homepage-row3">
                    <div class="col-sm-4">
                        <h2>Your whole vacation starts here</h2>
                        <h5>Choose a rental from the world's best selection</h5>
                    </div>
                    <div class="col-sm-4">
                        <h2>Book and stay with confidence</h2>
                        <h5>Secure payments, peace of mind</h5>
                    </div>
                    <div class="col-sm-4">
                        <h2>Your vacation your way</h2>
                        <h5>More space, more privacy, no compromises</h5>
                    </div>                        
                </div>
            </div>
        )
    }
}

export default Homepage;