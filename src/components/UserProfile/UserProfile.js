import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// import cookie from 'react-cookies';
// import {Redirect} from 'react-router';
//import { Dropdown.Item, DropdownButton} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import axios from 'axios';
import './UserProfile.css';
import { connect } from 'react-redux';
import { userProfile } from '../../Redux/reducer';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
        this.successMsg = '';
    }
    
    render(){   
        let {firstname, lastname, aboutme, mycountry, company, school, hometown, languages, gender, phonenum, emailID} = this.state;
        let {userProfileSuccess, userProfileError} = this.props;
        console.log("SignIn State changed:", this.state);
        console.log("Flag details:", userProfileSuccess, userProfileError);
    
        if(userProfileSuccess) {
            this.successMsg = "Profile Information updated successfully";
        }
    
        return(
            <div class="user-first-div">
                <div class="row user-row1">
                    <div class="col-sm-5">
                        <Link to="/"><img height="50" width="175" alt='' src={require("../Images/HomeAway.png")}/></Link>
                    </div>
                    <div class="col-sm-2 user-col2">
                        <Link to="./TravelerDashboard">Trip Boards</Link>
                    </div>
                    <div class="col-sm-2 user-dropdown1">
                        <DropdownButton bsStyle="primary" title="My Account">
                            <Dropdown.Item eventKey="1"><Link to="/TravelLogin">Homepage</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/TravelerDashboard">My trips</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/UserProfile">My profile</Link></Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="5"><Link to="/OwnersDashboard">Owners Dashboard</Link></Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="6"><Link to="/" class="glyphicon glyphicon-log-out"> Logout</Link></Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div class="col-sm-2">
                        <button class="user-nav-btn"><Link to="./ListProperty">List your property</Link></button>
                    </div>
                    <div class="col-sm-1 user-logo-col2">
                        <img height="50" width="50" alt='' src={require("../Images/logo1.png")}/>
                    </div>
                </div>
                <div class="row user-row2">
                    <div class="col-sm-1">
                    
                    </div>
                    <div class="col-sm-1">
                        <label>Inbox</label>
                    </div>
                    <div class="col-sm-1">
                        <label><Link to="/TraverlerDashboard">My Trips</Link></label>
                    </div>
                    <div class="col-sm-1">
                        <label><Link to="/UserProfile">Profile</Link></label>
                    </div>
                    <div class="col-sm-1">
                        <label>Account</label>
                    </div>
                    <div class="col-sm-7">

                    </div>
                </div>
                <div class="user-form">
                    <div class="user-main-div">
                        <div class="user-div1">
                            <img class="user-img1" height="150" width="125" alt='' src={require("../Images/logo4.png")}/>
                            <h1>Jyothsna Chowdary</h1>
                            <h3>Member since 2018</h3>
                        </div>
                        <div class="container">
                            <div class="user-ad-left">
                                <h2>Profile Information</h2>
                                <form name="loginForm" onSubmit={this.onSubmit}>
                                    <div className="form-group-collection">
                                        <div className="form-group">
                                            <input type="text" name="firstname" onChange={e => this.setState({firstname: e.target.value})} value={firstname} placeholder="Enter First Name" class="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="lastname" onChange={e => this.setState({lastname: e.target.value})} value={lastname} placeholder="Enter Last Name" class="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="aboutme" onChange={e => this.setState({aboutme: e.target.value})} value={aboutme} placeholder="About Me" class="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="mycountry" onChange={e => this.setState({mycountry: e.target.value})} value={mycountry} placeholder="My Country" class="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="company" onChange={e => this.setState({company: e.target.value})} value={company} placeholder="Company" class="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="school" onChange={e => this.setState({school: e.target.value})} value={school} placeholder="School" class="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="hometown" onChange={e => this.setState({hometown: e.target.value})} value={hometown} placeholder="Hometown" class="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="languages" onChange={e => this.setState({languages: e.target.value})} value={languages} placeholder="Languages" class="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="gender" onChange={e => this.setState({gender: e.target.value})} value={gender} placeholder="Gender" class="form-control"/>
                                        </div>
                                        <img class="user-img2" height="100" width="500" alt='' src={require("../Images/Profile4.png")}/>
                                        <div className="form-group">
                                            <input type="text" name="phonenum" onChange={e => this.setState({phonenum: e.target.value})} value={phonenum} placeholder="Phonenum" class="form-control"/>
                                            <h4><a href="/SignIn">Add another phone number</a></h4><br/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="emailID" onChange={e => this.setState({emailID: e.target.value})} value={emailID} placeholder="Email ID" class="form-control"/>
                                        </div>
                                    </div>
                                    <button class="user-btn">Save Changes</button>
                                </form>
                            </div>
                            <div class="user-ad-right">
                                <div class="col-row1">
                                    <img height="400" width="350" alt='' src={require("../Images/Profile1.png")}/>
                                </div>
                                <div class="col-row2">
                                    <img height="100" width="350" alt='' src={require("../Images/Profile2.png")}/>
                                </div>
                                <div class="col-row3">
                                    <img height="500" width="350" alt='' src={require("../Images/Profile3.png")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="userprofile-successmsg">
                        {this.successMsg}
                    </div>
                </div>
            </div>   
        )
    }
    onSubmit(e) {
        e.preventDefault();
        let { firstname, lastname, aboutme, mycountry, company, school, hometown, languages, gender, phonenum, emailID } = this.state;
        this.props.userProfile(firstname, lastname, aboutme, mycountry, company, school, hometown, languages, gender, phonenum, emailID);
        this.setState({
            firstname : "",
            lastname : "",
            aboutme : "",
            mycountry : "",
            company : "",
            school : "",
            hometown : "",
            languages : "",
            gender : "",
            phonenum : "",
            emailID : ""
        });
    }
}

const mapStateToProps = (state) => {
    return {
      userProfileSuccess: state.userProfileSuccess,
      userProfileError: state.userProfileError
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        userProfile: (firstname, lastname, aboutme, mycountry, company, school, hometown, languages, gender, phonenum, emailID) => dispatch(userProfile(firstname, lastname, aboutme, mycountry, company, school, hometown, languages, gender, phonenum, emailID))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);