import React, {Component} from 'react';
import {Route,  Routes } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import SignUpEmail from './SignUpEmail/SignUpEmail.js';
import OwnersSignIn from './OwnersSignIn/OwnersSignIn';
import Homepage from './Homepage/Homepage';
import UserProfile from './UserProfile/UserProfile';
import ThankYou from './ThankYou/Thankyoupage';
import TravelLogin from './TravLogin/TravLoginPage';
import ListProperty from './ListProperty/ListProperty';
import ListPropertySidebar from './ListProperty/ListPropertySidebar';
import ListPropertyWelcome from './ListProperty/ListPropertyWelcome';
import ListPropertyDescribe from './ListProperty/ListPropertyDescribe';
import ListPropertyAvailability from './ListProperty/ListPropertyAvailability';
import ListPropertyCharges from './ListProperty/ListPropertyCharges';
import DetailsView from './DetailsView/DetailsView';
import DetailsMainView from './DetailsView/DetailsMainView';
import TravelerDashboard from './TravelerDashboard/TravelerDashboard';
import OwnersDashboard from './OwnersDashboard/OwnersDashboard';
import OwnersDashboardAll from './OwnersDashboard/OwnersDashboardAll';
import OwnersDashboardBooked from './OwnersDashboard/OwnersDashboardBooked';
import OwnersSignUpEmail from './OwnersSignUpEmail/OwnersSignUpEmail';
import TravelerInbox from './TravelerInbox/TravelerInbox';
import AskQuestion from './AskQuestion/AskQuestion';
import OwnersInbox from './OwnersInbox/OwnersInbox';
import OwnersReply from './OwnersInbox/OwnersReply';
import OwnersOutbox from './OwnersInbox/OwnersOutbox';
import TravelerOutbox from './TravelerInbox/TravelerOutbox';

//Create a Main Component
class Router extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route
                */}
                
                    <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route exact path="/SignIn" element={<SignIn/>}/>
                <Route exact path="/SignUp" element={<SignUp/>}/>
                <Route exact path="/SignUpEmail" element={<SignUpEmail/>}/>
                <Route exact path="/OwnersSignIn" element={<OwnersSignIn/>}/>
                <Route exact path="/UserProfile" element={<UserProfile/>}/>
                <Route exact path="/ThankYou" element={<ThankYou/>}/>
                <Route exact path="/TravelLogin" element={<TravelLogin/>}/>
                <Route exact path="/ListProperty" element={<ListProperty/>}/>
                <Route exact path="/ListPropertySidebar" element={<ListPropertySidebar/>}/>
                <Route exact path="/ListPropertyWelcome" element={<ListPropertyWelcome/>}/>
                <Route exact path="/ListPropertyDescribe" element={<ListPropertyDescribe/>}/>
                <Route exact path="/ListPropertyAvailability" element={<ListPropertyAvailability/>}/>
                <Route exact path="/ListPropertyCharges" element={<ListPropertyCharges/>}/>
                <Route exact path="/DetailsView" element={<DetailsView/>}/>
                <Route exact path="/DetailsMainView" element={<DetailsMainView/>}/>
                <Route exact path="/TravelerDashboard/TravelerDashboard" element={<TravelerDashboard/>}/>
                <Route exact path="/OwnersDashboard" element={<OwnersDashboard/>}/>
                <Route exact path="/OwnersDashboardAll" element={<OwnersDashboardAll/>}/>
                <Route exact path="/OwnersDashboardBooked" element={<OwnersDashboardBooked/>}/>
                <Route exact path="/OwnersSignUpEmail" element={<OwnersSignUpEmail/>}/>
                <Route exact path="/TravelerInbox" element={<TravelerInbox/>}/>
                <Route exact path="/OwnersInbox" element={<OwnersInbox/>}/>
                <Route exact path="/AskQuestion" element={<AskQuestion/>}/>
                <Route exact path="/OwnersReply" element={<OwnersReply/>}/>
                <Route exact path="/TravelerOutbox" element={<TravelerOutbox/>}/>
                <Route exact path="/OwnersOutbox" element={<OwnersOutbox/>}/>
                </Routes>
                
             </div>
        )
    }
}
//Export The Main Element
export default Router;