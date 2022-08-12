import React,{Component} from 'react';
import './DetailsView.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {MenuItem, Dropdown, DropdownButton} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DetailsComponent from './DetailsComponent';
//import Pagination from "react-js-pagination";
import ReactPaginate from 'react-paginate';

class DetailsView extends Component {
    constructor(){
        super();
        this.state = {  
            propertyDetails : [],
            place : '',
            activePage: 1
        }
        this.placeChangeHandler = this.placeChangeHandler.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }  
    //get the books data from backend  
    componentDidMount(){
        axios.get('http://localhost:3000/DetailsView')
                .then((response) => {
                    console.log("response",response.data);
                //update the state with the response data
                this.setState({
                    propertyDetails : this.state.propertyDetails.concat(response.data) 
                });
                console.log("PropertyDetails within DetailsView FE",this.state.propertyDetails);
            });
    }

    placeChangeHandler = (e) => {
        this.setState({
            place : e.target.value
        })
    }
  
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({
            activePage: pageNumber
        });
    }

    render() {
        let propDetails = this.state.propertyDetails.map(propertyDetails => {
            return (
                <DetailsComponent>{propertyDetails.headline}{propertyDetails.proptype}{propertyDetails.noofrooms}{propertyDetails.noofbathrooms}{propertyDetails.accomodates}{propertyDetails.baserate}{propertyDetails.propertyID}</DetailsComponent>
            )
        })
        let propDetailsAddress = this.state.propertyDetails.map(propertyDetails => {
            return (
                <tr>{propertyDetails.address}</tr>
            )
        }) 
        return (
            <div class="details-first-div">
                <div class="row details-row1">
                    <div class="col-sm-5 details-logo-col1">
                        <Link to="/"><img height="60" width="170" alt='' src={require('../Images/logo3.png')}/></Link>
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
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">Travelers</Dropdown.Item>
                            <Dropdown.Item eventKey="3">How it works</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Security Center</Dropdown.Item>
                            <Dropdown.Item divider />
                            <Dropdown.Item eventKey="5">Homeowners</Dropdown.Item>
                            <Dropdown.Item eventKey="7">List your property</Dropdown.Item>
                            <Dropdown.Item eventKey="6">How it works</Dropdown.Item>
                            <Dropdown.Item eventKey="8">Community</Dropdown.Item>
                            <Dropdown.Item eventKey="9">Discovery Hub</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item eventKey="10">Property managers</Dropdown.Item>
                            <Dropdown.Item eventKey="11">List your properties</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div class="col-sm-2">
                        <button class="details-nav-btn"><Link to="./ListProperty">List your property</Link></button>
                    </div>
                    <div class="col-sm-1 details-logo-col2">
                        <img height="60" width="60" alt=''  src={require("../Images/logo1.png")}/>
                    </div>
                </div>
        
                <div class="row details-row2">
                    <div class="col-sm-4 details-info-col1">
                        {propDetailsAddress[0]}
                    </div>
                    <div class="col-sm-2 details-info-col2">
                        <span class="glyphicon glyphicon-calendar">Arrive</span>
                    </div>
                    <div class="col-sm-2 details-info-col3">
                        <span class="glyphicon glyphicon-calendar">Depart</span>
                    </div>
                    <div class="col-sm-1 details-info-col4">
                        <h3>Guests</h3>
                    </div>
                </div>
                <div>
                    {propDetails}
                </div>
                <div class="pagination-details">
                    <ReactPaginate
                        activePage={this.state.activePage}
                        itemsCountPerPage={0}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }
}
export default DetailsView;