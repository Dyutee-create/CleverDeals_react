import React,{Component} from 'react';
import './DetailsView.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
import { Navigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ImageComponent from './ImageComponent';


class DetailsMainView extends Component {
    constructor(props){
        super(props);
        this.state = {  
            propertyDetails : [],
            // place : '',
            ID : props.location.state,
            bookedFlag: '',
            outputID : '',
            // imageurl : './Image1.jpeg',
            detailsFlag : false
        }
        this.submitForm = this.submitForm.bind(this);
    }  
    
    //get the books data from backend  
    componentDidMount(){
        console.log("Property ID : ", this.state.ID.id);
        axios.get(`http://localhost:3000/DetailsMainView`, {
            params: {
                id: `${this.state.ID.id}`
            }
        })
            .then((response) => {
                console.log("response",response.data);
                //update the state with the response data
                this.setState({
                    propertyDetails : this.state.propertyDetails.concat(response.data) 
                });
                console.log("PropertyDetails",this.state.propertyDetails);
            });
    }

    
    //submit Login handler to send a request to the node backend
    submitForm = (e) => {
        // var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
        const data = {
          bookedFlag: 'Booked',
          outputID: this.state.ID.id
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        
        axios.post('http://localhost:3000/DetailsMainView',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    this.setState({
                        detailsFlag : true
                    })
                }else{
                    this.setState({
                        detailsFlag : false
                    })
                }
            });
    }
    
    render() {
        let redirectVar = null;
        console.log("DetailsFlag: ", this.state.detailsFlag);
        if(this.state.detailsFlag){
            redirectVar = <Navigate to= "/TravelLogin"/>
            console.log("redirectVar :", redirectVar)
        }

        let propertyDetailsHeadline = this.state.propertyDetails.map(propertyDetails => {
            return(
                <tr>{propertyDetails.headline}</tr>
            )
        })
        // let propertyDetailsStartdate = this.state.propertyDetails.map(propertyDetails => {
        //     return(
        //         <tr>{propertyDetails.startdate}</tr>
        //     )
        // })
        // let propertyDetailsEnddate = this.state.propertyDetails.map(propertyDetails => {
        //     return(
        //         <tr>{propertyDetails.enddate}</tr>
        //     )
        // })
        let propertyDetailsAddress = this.state.propertyDetails.map(propertyDetails => {
            return(
                <tr>{propertyDetails.address}</tr>
            )
        })
        let propertyDetailsProptype = this.state.propertyDetails.map(propertyDetails => {
            return(
                <tr>{propertyDetails.proptype}</tr>
            )
        })
        let propertyDetailsNoofrooms = this.state.propertyDetails.map(propertyDetails => {
            return(
                <tr>{propertyDetails.noofrooms}</tr>
            )
        })
        let propertyDetailsNoofbathrooms = this.state.propertyDetails.map(propertyDetails => {
            return(
                <tr>{propertyDetails.noofbathrooms}</tr>
            )
        })
        let propertyDetailsGuests = this.state.propertyDetails.map(propertyDetails => {
            return(
                <tr>{propertyDetails.accomodates}</tr>
            )
        })
        let propertyDetailsPrice = this.state.propertyDetails.map(propertyDetails => {
            return(
                <tr>{propertyDetails.baserate}</tr>
            )
        })
        let propertyDetailsMinStay = this.state.propertyDetails.map(propertyDetails => {
            return(
                <tr>{propertyDetails.minstay}</tr>
            )
        })
        let propertyDetailsDesc = this.state.propertyDetails.map(propertyDetails => {
            return(
                <tr>{propertyDetails.propdesc}</tr>
            )
        })
        let propertyDetailsID = this.state.propertyDetails.map(propertyDetails => {
            return (
                <tr>{propertyDetails.propertyID}</tr>
            )
        })
      
        const recordId = this.state.ID.id;
        console.log("recordId:", recordId);
        const imagePath = [ `./Image${recordId}.jpg`, `./Image${recordId}1.jpg`, `./Image${recordId}2.jpg`, `./Image${recordId}3.jpg`, `./Image${recordId}4.jpg`, `./Image${recordId}5.jpg`]
        console.log("imagePath:", imagePath);
        
        return (
            <div class="details-first-div">
               {redirectVar}
                <div class="row details-row1">
                    <div class="col-sm-5 details-logo-col1">
                        <Link to="/"><img height="60" width="170" alt = " " src={require('../Images/logo3.png')} /></Link>
                    </div>
                    <div class="col-sm-2 details-dropdown1">
                       <DropdownButton bsStyle="primary" title="My Account">
                            <Dropdown.Item eventKey="1">Inbox</Dropdown.Item>
                            <Dropdown.Item eventKey="2">My trips</Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/UserProfile">My profile</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4">Accounts</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="5">Owner Dashboard</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="6"><Link to="/">Logout</Link></Dropdown.Item>
                        </DropdownButton>
                    </div>
            
                    <div class="col-sm-1 details-dropdown2">
                        <DropdownButton bsStyle="primary" title="Help">
                            <Dropdown.Item eventKey="1">Visit help center</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item eventKey="2">Travelers</Dropdown.Item>
                            <Dropdown.Item eventKey="3">How it works</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Security Center</Dropdown.Item>
                            <Dropdown.Divider/>
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
                        <button class="details-nav-btn"><Link to="./ListProperty">List your property</Link></button>
                    </div>
                    <div class="col-sm-1 details-logo-col2">
                        <img height="60" width="60" alt = " " src={require("../Images/logo1.png")}/>
                    </div>
                </div>
        
                <div class="row details-row2">
                    <div class="col-sm-4 details-info-col1">
                        {propertyDetailsAddress}
                    </div>
                    <div class="col-sm-2 details-info-col2">
                        <span class="glyphicon glyphicon-calendar">Arrive</span>
                    </div>
                    <div class="col-sm-2 details-info-col3">
                        <span class="glyphicon glyphicon-calendar">Depart</span>
                    </div>
                    <div class="col-sm-2">
                        <button class="details-search-btn"><Link to="./TravelLogin">Search</Link></button>
                    </div>
                </div>
                <div class="details-main-container">
                    <div class="details-main-left"> 
                        <div>
                            <ImageComponent imagePath={imagePath}  propertyId={propertyDetailsID}></ImageComponent>
                        </div>
                        {/*<img height="500" width="900" src={require(`./Image1.jpeg`)}/>*/}
                        <div class="row details-main-header1">
                            <div class="col-sm-2">
                                <h4>Overview</h4>
                            </div>
                            <div class="col-sm-2">
                                <h4>Amenities</h4>
                            </div>
                            <div class="col-sm-2">
                                <h4>Reviews</h4>
                            </div>
                            <div class="col-sm-2">
                                <h4>Map</h4>
                            </div>
                            <div class="col-sm-3">
                                <h4>Rates & Availability</h4>
                            </div>
                        </div>
                        <div class="details-sec-div">
                            <h2>{propertyDetailsHeadline}</h2>
                            <h4>{propertyDetailsAddress}</h4>
                        </div>
                        <div class="details-third-div">
                            <div class="row details-third-row">
                                <div class="col-sm-2">
                                    <img height="50" width="50" alt = " " src={require('../Images/img1.png')}/>
                                    <h4>{propertyDetailsProptype}</h4>
                                    <h4>924 sq. ft.</h4>
                                </div>
                                <div class="col-sm-2">
                                    <img height="50" width="50" alt = " " src={require('../Images/img2.png')}/>
                                    <h4>Bedrooms</h4>
                                    <h4>{propertyDetailsNoofrooms}</h4>
                                </div>
                                <div class="col-sm-2">
                                    <img height="50" width="50" alt = " " src={require('../Images/img3.png')}/>
                                    <h4>Sleeps</h4>
                                    <h4>{propertyDetailsGuests}</h4>
                                </div>
                                <div class="col-sm-2">
                                    <img height="50" width="50" alt = " " src={require('../Images/img4.png')}/>
                                    <h4>Bathrooms</h4>
                                    <h4>{propertyDetailsNoofbathrooms}</h4>
                                </div>
                                <div class="col-sm-2">
                                    <img height="50" width="50" alt = " " src={require('../Images/img5.png')}/>
                                    <h4>Half Baths</h4>
                                    <h4>0</h4>
                                </div>
                                <div class="col-sm-2">
                                    <img height="50" width="50" alt = " " src={require('../Images/img6.png')}/>
                                    <h4>Min Stay</h4>
                                    <h4>{propertyDetailsMinStay} nights</h4>
                                </div>
                            </div>
                            <div class="details-desc">
                                <div class="panel">
                                    <h2>Property Description</h2>
                                </div>
                                 <p>{propertyDetailsDesc}</p>
                            </div>
                        </div>
                        <div class="genral-div">
                            <div class="panel">
                                <h3>Amenities</h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p>Internet</p>
                                    <p>Air Conditioning</p>
                                    <p>Fireplace</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Heater</p>
                                    <p>Washer & Dryer</p>
                                    <p>Hot Tub</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>TV</p>
                                    <p>No Smoking</p>
                                    <p>Parking</p>
                                </div>  
                            </div>
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>Meals</h3>
                            </div>
                            <p>Guests provide their own meals</p>
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>General</h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p>Internet</p>
                                    <p>Air Conditioning</p>
                                    <p>Linens Provided</p>
                                    <p>Wireless Internet</p>
                                    <p>Free Wifi</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Washing Machine</p>
                                    <p>Clothes Dryer</p>
                                    <p>Fireplace</p>
                                    <p>Iron & Board</p>
                                    <p>Hair Dryer</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Parking</p>
                                    <p>Heating</p>
                                    <p>Towels Provided</p>
                                    <p>Living Room</p>
                                </div>
                            </div> 
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>Kitchen</h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p>Dishwasher</p>
                                    <p>Refrigerator</p>
                                    <p>Stove</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Oven</p>
                                    <p>Microwave</p>
                                    <p>Coffe Maker</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Dishes & Utensils</p>
                                    <p>Kitchen</p>
                                </div>
                            </div>
                        </div>
                        <div class="general-div">  
                            <div class="panel">
                                <h3>Dining</h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p>Dining Area</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Dining</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Comfy seating for 6 people</p>
                                </div>
                            </div>
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>Entertainment</h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p>Television</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Basic chanel and HBO</p>
                                </div>
                            </div>
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>Outside</h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p>Lawn/Garden</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Deck/Patio</p>
                                </div>
                            </div> 
                        </div>
                        <div class="general-div"> 
                            <div class="panel">
                                <h3>Suitability</h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p>Wheelchair inaccessible</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Long term renters Welcome</p>
                                </div>
                            </div>
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>Pool/Spa</h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p>Community pool</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Hot tub</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Spa whirlpool</p>
                                </div>
                            </div>
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>Attractions</h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p>Cinemas</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>Restaurants</p>
                                </div>
                            </div>
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>Leisure Activities</h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p>horseback riding</p>
                                    <p>gambling casinos</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>sight seeing</p>
                                    <p>bird watching</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>outlet shopping</p>
                                    <p>scenic drives</p>
                                </div>
                            </div>  
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>Local Services & Businesses</h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p>ATM/bank</p>
                                    <p>fitness center</p>
                                    <p>groceries</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>hospital</p>
                                    <p>laundromat</p>
                                    <p>Babysitter</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>massage therapist</p>
                                    <p>medical services</p>
                                </div>
                            </div>
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>Sports & Adventure Activities</h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p>fishing</p>
                                </div>
                                <div class="col-sm-3">
                                    <p>golf</p>
                                </div>
                            </div>
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>Notes</h3>
                            </div>
                            <p>3 nearby shopping mall has all type of restaurants in working distance. Supermarkets, massage shop etc.</p>
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>House Rules</h3>
                            </div>
                            <p>Check-in: 3:00 PM   Check-out: 11:00 AM</p>
                        </div>
                        <div class="general-div">
                            <div class="panel">
                                <h3>Cancellation Policy</h3>
                            </div>
                            <p>100% refund if canceled at least 30 days before arrival date. 50% refund if canceled at least 14 days before arrival date</p>
                        </div>
                    </div>
                    <div class="details-main-right">
                        <h1 class="details-right-h1"><span>{propertyDetailsPrice} avg/night</span></h1>
                        <span class="details-review"><span class="glyphicon glyphicon-star"/><span class="glyphicon glyphicon-star"/><span class="glyphicon glyphicon-star"/><span class="glyphicon glyphicon-star"/><span class="glyphicon glyphicon-star"/>9 Reviews</span>
                        <p></p>
                        <div class="details-date">
                            <div class="form-group details-left">
                                <label class="details-label1">Checkin date:</label>
                                <input type="date" name="startdate" class="form-control" placeholder="Checkin"/>
                            </div>
                            <div class="form-group details-right">
                                <label class="details-label2">Checkout date:</label>
                                <input type="date" name="enddate" class="form-control" placeholder="Checkout"/>
                            </div>
                        </div>
                        <div class="guest-details">
                            <input type="text" name="guests" class="form-control" placeholder="1 Guest"/>
                        </div>
                        <button class="details-btn" onClick={this.submitForm}>Request to Book</button>
                        <div class="question-div">
                            <Link to="/AskQuestion">Ask Owner a Question</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default DetailsMainView;