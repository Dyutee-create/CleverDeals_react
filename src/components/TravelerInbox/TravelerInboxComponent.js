import React from 'react';
//import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './TravelerInbox.css';

const TravelerInboxComponent = (props) => {
        return (
            <div class="travmesg-div">
                <div class="row">
                    <div class="col-sm-5">
                        <h3>From: {props.children[2]} {props.children[3]}</h3>
                    </div>
                    <div class="col-sm-6">
                        <h3>EmailID: {props.children[1]}</h3>
                    </div>
                </div>
                <br/>
                <h3>Message: </h3>
                <h4>{props.children[0]}</h4>
                <button class="travinbox-btn"><Link to="/AskQuestion">Reply</Link></button>
            </div>
        )
    }
    
export default TravelerInboxComponent;