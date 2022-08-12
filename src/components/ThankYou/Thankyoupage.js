import React, {Component} from 'react';
import './Thankyoupage.css';
// import axios from 'axios';
// import cookie from 'react-cookies';
// import {Redirect} from 'react-router';
// import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//Define a Login Component
class Thankyoupage extends Component{
    render(){
        return(
            <div class="thankyou-first-div">
                {/*<img background="transparent" height="500" width="500" src={require('../Images/home1.png')}/>*/}
                <div class="container">
                    <div class="thankyou-header">
                        <h1>Thank you for creating an account</h1>
                    </div>
                    <div class="thankyou-form">
                        <div class="thankyou-div">
                            <div class="thankyou-msg1">
                                <h3>Welcome Dyutee Moy  </h3>
                            </div>
                            <div class="thankyou-image1">
                                <img height="200" width="200" alt='thank u logo' src={require('../Images/logo2.png')}/>
                            </div>
                            <div class="thankyou-msg2">
                                <h5><label>Please take few moments to update your profile with a picture and a few details 
                                about yourself. Property owners are more likely to respond more quickly to travelers with 
                                profiles.</label></h5>
                            </div>
                            <div class="thankyou-btn-div">
                                <button class="thankyou-btn1"><Link to="/TravelLogin">Continue</Link></button>
                                <button class="thankyou-btn2"><a href="/UserProfile">Update your profile</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//export Login Component
export default Thankyoupage;

