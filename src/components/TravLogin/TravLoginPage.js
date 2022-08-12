import React,{Component} from 'react';
import './TravLoginPage.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Navigate} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class TravLoginPage extends Component {
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            place : "",
            startdate : "",
            enddate : "",
            guests : "",
            travLoginFlag : false
        }
        //Bind the handlers to this class
        this.placeChangeHandler = this.placeChangeHandler.bind(this);
        this.startdateChangeHandler = this.startdateChangeHandler.bind(this);
        this.enddateChangeHandler = this.enddateChangeHandler.bind(this);
        this.guestsChangeHandler = this.guestsChangeHandler.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    componentWillMount(){
        this.setState({
            travLoginFlag : false
        })
    }
    //username change handler to update state variable with the text entered by the user
    placeChangeHandler = (e) => {
        this.setState({
            place : e.target.value
        })
    }
    startdateChangeHandler = (e) => {
        this.setState({
            startdate : e.target.value
        })
    }
    enddateChangeHandler = (e) => {
        this.setState({
            enddate : e.target.value
        })
    }
    guestsChangeHandler = (e) => {
        this.setState({
            guests : e.target.value
        })
    }
    submitLogin = (e) => {
        // var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
        const data = {
            place : this.state.place,
            startdate : this.state.startdate,
            enddate : this.state.enddate,
            guests : this.state.guests
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3000/TravLogin',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    this.setState({
                        travLoginFlag : true
                    })
                }else{
                    this.setState({
                        travLoginFlag : false
                    })
                }
            });
    }

    render(){   
        let redirectVar = null;
        if(this.state.travLoginFlag){
            redirectVar = <Navigate to= "/DetailsView"/>
            console.log(redirectVar);
        }
        return(
            <div class="travloginpage-first-div">
                {redirectVar}
                <div class="row travloginpage-row1">
                    <div class="col-sm-6 travloginpage-logo-col">
                        <label><a href="/">HomeAway</a></label>
                    </div>
                    <div class="col-sm-1 travloginpage-link">
                        <a href="/TravelerDashboard">Trip Boards</a>
                    </div>
                    <div class="col-sm-2 travloginpage-dropdown1">
                        <DropdownButton bsStyle="link" title="My Account">
                            <Dropdown.Item eventKey="1"><Link to="TravelerInbox">Inbox</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/TravelerDashboard">My trips</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/UserProfile">My profile</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4">Accounts</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="5"><Link to="/OwnersDashboard">Owner Dashboard</Link></Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="6"><Link to="/">Logout</Link></Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div class="col-sm-2">
                    <button class="travloginpage-nav-btn"><Link to="./ListProperty">List your property</Link></button>
                    </div>
                    <div class="col-sm-1 travloginpage-logo-col2">
                        <img height="50" width="50" alt='' src={require("../Images/logo10.png")}/>
                    </div>
                </div>
                <div class="travloginpage-form">
                    <div class="travloginpage-div">
                        <h1 class="travloginpage-h1">Book beach houses, cabins,</h1>
                        <h1 class="travloginpage-h1">condos and more, worldwide</h1>
                        <div className="container">
                            <div class="row travloginpage-row2">
                                <div class="col-sm-3">
                                    <input onChange = {this.placeChangeHandler} type="text" name="place" class="form-control" placeholder="Where do you want to go?"/>
                                </div>
                                <div class="col-sm-2 travloginpage-col">
                                    <input onChange = {this.startdateChangeHandler} type="date" name="startdate" class="form-control" placeholder=""/>
                                </div>
                                <div class="col-sm-2 travloginpage-col">
                                    <input onChange = {this.enddateChangeHandler} type="date" name="enddate" class="form-control" placeholder=""/>
                                </div>
                                <div class="col-sm-1 travloginpage-col">
                                    <input onChange = {this.guestsChangeHandler} type="text" name="guests" class="form-control" placeholder="Guests"/>
                                </div>
                                <div class="col-sm-2 travloginpage-col5">
                                    <button onClick = {this.submitLogin} class="travloginpage-btn">SEARCH</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row travloginpage-row3">
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

export default TravLoginPage;