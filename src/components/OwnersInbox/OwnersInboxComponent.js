import React from 'react';
import {Link} from 'react-router-dom';
import './OwnersInbox.css';
//import OwnersReply from './OwnersReply';

const OwnersInboxComponent = (props) => {
        return (
            <div class="ownersmesg-div">
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
                <button class="ownersinbox-btn"><Link to={{ pathname: '/OwnersReply', state: { id: `${props.children[4]}`} }}>Reply</Link></button>
                
                </div>
        )
    }
    
export default OwnersInboxComponent;