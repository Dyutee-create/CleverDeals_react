import React, {Component} from 'react';
import './OwnersSignUpEmail.css';
// import axios from 'axios';
// import cookie from 'react-cookies';
import { Navigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { ownersSignUpLogin } from '../../Redux/reducer';

//Define a Login Component
class OwnersSignUpEmail extends Component{
    //call the constructor method
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    render(){
        let {firstname, lastname, emailID, password} = this.state;
        let {ownersSignUpLoginSuccess } = this.props;
        console.log("SignIn State changed:", this.state);
        //redirect based on successful login
        let redirectVar = null;
        if(ownersSignUpLoginSuccess){
            redirectVar = <Navigate to= "/ListProperty"/>
        }
        return(
            <div class="ownerssignupemail-first-div">
                {redirectVar}
                <div class="row ownerssignupemail-row">
                    <div class="col-sm-11">
                        <img class="ownerssignupemail-image1" height="60" width="175" alt='' src={require("../Images/logo3.png")}/>
                    </div>
                    <div class="col-sm-1">
                        <img height="60" width="70"alt='' src={require("../Images/logo1.png")}/>
                    </div>
                </div>
                <div class="container">
                    <div class="ownerssignupemail-entire-thing">
                        <div class="ownerssignupemail-header">
                            <h1>Sign up for HomeAway</h1> 
                            <h4>Already have an account? <a href="/SignIn">Log in</a></h4>
                        </div>
                        <div class="ownerssignupemail-form">
                            <div class="ownerssignupemail-div"> 
                                <form name="loginForm" onSubmit={this.onSubmit}>
                                    <div className="form-group-collection">
                                        <div className="form-group">
                                            <div class="ownerssignupemail-ad-left">
                                                <input type="text" name="firstname" onChange={e => this.setState({firstname: e.target.value})} value={firstname} placeholder="Enter First name" class="form-control"/>
                                            </div>
                                            <div class="ownerssignupemail-ad-right">
                                                <input type="text" name="lastname" onChange={e => this.setState({lastname: e.target.value})} value={lastname} placeholder="Enter Last name" class="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="emailID" onChange={e => this.setState({emailID: e.target.value})} value={emailID} placeholder="Enter Email ID" class="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password} placeholder="Enter password" class="form-control"/>
                                        </div>
                                    </div>
                                    <button class="ownerssignupemail-btn">Sign me Up</button>  
                                </form>
                                <p class='ownerssignupemail-line-div'>or</p>
                                <div>
                                    <label><img class="ownerssignupemail-fb" height="49" width="330" alt='' src={require('../Images/fb.png')}/></label>
                                    <label><img class="ownerssignupemail-google" height="48" width="330" alt='' src={require('../Images/google.png')}/></label>             
                                </div>
                                <h6 class='ownerssignupemail-msg1-div'>We don't post anything without your permission.</h6>
                                <h6 class='ownerssignupemail-msg1-div'>By creating an account you are accepting our Terms and Conditions and Privacy Policy.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='ownerssignupemail-lastmsg-div'>
                    <h7>Use of this Web site constitutes acceptance of the HomeAway.com Terms and Conditions and Privacy Policy.</h7><br></br>
                    <h7>©2018 HomeAway. All rights reserved.</h7>
                </div>
            </div>
        )
    }
    onSubmit(e) {
        e.preventDefault();
        let {firstname, lastname, emailID, password } = this.state;
        this.props.ownersSignUpLogin(firstname, lastname, emailID, password);
        this.setState({
          firstname: '',
          lastname: '',
          emailID: '',
          password: ''
        });
      }
}

const mapStateToProps = (state) => {
    return {
        ownersSignUpLoginSuccess: state.ownersSignUpLoginSuccess,
        ownersSignUpLoginError: state.ownersSignUpLoginError
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        ownersSignUpLogin: (firstname, lastname, emailID, password) => dispatch(ownersSignUpLogin(firstname, lastname, emailID, password))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(OwnersSignUpEmail);

