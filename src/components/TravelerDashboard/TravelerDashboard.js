import React,{Component} from 'react';
import './TravelerDashboard.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import cookie from 'react-cookies';
import {Navigate} from 'react-router-dom';
//import {Dropdown.Item,  DropdownButton} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DetailsComponent from '../DetailsView/DetailsComponent';
import ReactPaginate from 'react-paginate';

class TravelerDashboard extends Component {
    constructor(){
        super();
        this.state = {  
            travPropertyDetails : [],
            place : '',
            activePage: 1,
            travelerDashFlag: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this); 
        this.submitLogin = this.submitLogin.bind(this);
    }  
    //get the books data from backend  
    componentDidMount(){
        axios.get('http://localhost:3000/TravelerDashboard')
                .then((response) => {
                    console.log("response",response.data);
                //update the state with the response data
                this.setState({
                    travPropertyDetails : this.state.travPropertyDetails.concat(response.data) 
                });
                console.log("PropertyDetails within TravelerDashboard FE",this.state.travPropertyDetails);
            });
    }
    
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({
            activePage: pageNumber
        });
    }
    handleChange(e) {
        this.setState({
            place : e.target.value
        })
    }

    submitLogin(e) {
        // var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
        const data = {
            place: this.state.place
        }

        console.log("Data: ", data);
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3000/TravelerDashboard',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    this.setState({
                        travelerDashFlag : true
                    })
                }else{
                    this.setState({
                        travelerDashFlag : false,
                    })
                }
            });
    }

    render() {
        let travPropDetails = this.state.travPropertyDetails.map(travPropertyDetails => {
            return (
                <DetailsComponent>{travPropertyDetails.headline}{travPropertyDetails.proptype}{travPropertyDetails.noofrooms}{travPropertyDetails.noofbathrooms}{travPropertyDetails.accomodates}{travPropertyDetails.baserate}{travPropertyDetails.propertyID}</DetailsComponent>
            )
        })
       //redirect based on successful login
       let redirectVar = null;
       if(this.state.travelerDashFlag){
           redirectVar = <Navigate to= "/DetailsView"/>
       }
        return (
            <div class="travdash-first-div">
                {redirectVar}
                <div class="row travdash-row1">
                    <div class="col-sm-4 travdash-logo-col1">
                        <Link to="/"><img height="50" width="170" alt='' src={require('../Images/logo3.png')}/></Link>
                    </div>
                    <div class="col-sm-1 travdash-link">
                        <Link to="/TravelerDashboard">Trip Boards</Link>
                    </div>
                    <div class="col-sm-2 travdash-dropdown1">
                       <DropdownButton bsStyle="primary" title="My Account">
                            <Dropdown.Item eventKey="1">Inbox</Dropdown.Item>
                            <Dropdown.Item eventKey="2">My trips</Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/UserProfile">My profile</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4">Accounts</Dropdown.Item>
                            <Dropdown.Divider  />
                            <Dropdown.Item eventKey="5">Owner Dashboard</Dropdown.Item>
                            <Dropdown.Divider  />
                            <Dropdown.Item eventKey="6"><Link to="/">Logout</Link></Dropdown.Item>
                        </DropdownButton>
                    </div>
            
                    <div class="col-sm-2 trav-search-bar">
                        <input type="text" name="place" onChange={this.handleChange} placeholder="Search by place" class="form-control" />
                    </div>
                    <div class="col-sm-2 trav-search-btn">
                        <button class="trav-search-btn" onClick = {this.submitLogin}>Search</button>
                    </div>
                    <div class="col-sm-1 travdash-logo-col2">
                        <img height="60" width="60" alt='' src={require("../Images/logo1.png")}/>
                    </div>
                </div>
                <div class="travdash-sec-div">
                    <h1>Trip Boards</h1>
                    <h2>Trip Boards help you keep track of the places you love.</h2>
                </div>
                <div class="travdash-third-div">
                    <h3>You've booked the below listed properties</h3>
                </div>
                <div>
                {travPropDetails}
                </div>
                <div class="travpagination-details">
                    <ReactPaginate
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        
        )
    }
}

export default TravelerDashboard;