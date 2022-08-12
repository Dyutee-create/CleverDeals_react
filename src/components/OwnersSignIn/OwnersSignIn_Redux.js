import React, {Component} from 'react';
import './OwnersSignIn.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';
import { ownersLogin } from '../../Redux/reducer';
import {Link} from 'react-router-dom';

class OwnersSignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }
    
      /* callback to change the checkboxState to false when the checkbox is checked */
    toggle(event) {
        this.setState({
            checkboxState: !this.state.checkboxState
        });
    }
    
    render() {
        let {emailID, password} = this.state;
        let {ownerLoginSuccess, ownerLoginError} = this.props;
        console.log("State changed:", this.state);
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

        //redirect based on successful login
        let redirectVar = null;
        if(ownerLoginSuccess){
            redirectVar = <Redirect to= "/OwnersSignUpEmail"/>
            //console.log("Redirect", redirectVar);
            
        }

        return (
            <div class="owners-first-div">
                {redirectVar}
                <div class="row owners-row">
                    <div class="col-sm-1">
                        <img class="signin-image1" height="60" width="175" alt='' src={require("../Images/logo3.png")}/>
                    </div>
                    <div class="col-sm-1">
                        <img height="50" width="50" alt='' src={require("../Images/logo1.png")}/>
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
                                    <form name="loginForm" onSubmit={this.onSubmit}>
                                        <h3><Link to="/OwnersSignUpEmail">SignUp</Link></h3>
                                        <div className="form-group-collection">
                                            <div className="form-group">
                                                <input type="email" name="emailID" onChange={e => this.setState({emailID: e.target.value})} value={emailID} placeholder="Enter Email ID" class="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password} placeholder="Enter password" class="form-control"/>
                                            </div>
                                        </div>
                                        <div class="owners-pwd-div">
                                            <p><a href='/SignUp'>Forgot password?</a></p>
                                        </div>
                                        <button class="owners-btn">Log In</button> 
                                        <div class="owners-checkbox-div">
                                            <form onSubmit={this.onSubmit.bind(this)}>
                                                {checkbox}
                                            </form>
                                        </div>
                                        <h5 class='owners-msg1-div'>Want to list your property? <a href="/SignUp">Learn More</a></h5>
                                    </form>
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

onSubmit(e) {
    e.preventDefault();
    let { emailID, password } = this.state;
    this.props.ownersLogin(emailID, password);
    this.setState({
      emailID: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    ownerLoginSuccess: state.ownerLoginSuccess,
    ownerLoginError: state.ownerLoginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    ownersLogin: (emailID, password) => dispatch(ownersLogin(emailID, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnersSignIn);

