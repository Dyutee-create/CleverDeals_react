import React, { Component } from 'react';
import './ListPropertySidebar.css';
import './ListProperty.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListPropertyWelcome from './ListPropertyWelcome'
import ListPropertyDescribe from './ListPropertyDescribe';
import ListPropertyAvailability from './ListPropertyAvailability';
import ListPropertyCharges from './ListPropertyCharges';

class ListPropertySidebar extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }
  
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    render() {
        const { onSubmit } = this.props
        const { page } = this.state
        console.log("PAGE Details: ", this.state);

        return (
            <div>
                <div class="row listproperty-row">
                    <div class="col-sm-1">
                        <span class="glyphicon glyphicon-align-left listglyphicon1"></span>
                    </div>
                    <div class="col-sm-5 listproperty-col1">
                        <Link to="/"><img class="listproperty-img1" height="40" width="175" alt='' src={require("../Images/Homeaway_logo.png")}/></Link>
                    </div>
                    <div class="col-sm-2 listpropertydash">
                        <Link to="/OwnersDashboard" class="listproperty-link1">Dashboard</Link>
                    </div>
                    <div class="col-sm-2 listglyphicon3">
                        <Link to="/ListProperty" class="listglyphicon3">Add new property</Link>
                    </div>
                    <div class="col-sm-1">
                        <Link to="/" class="listglyphiconlogout"><span class="glyphicon glyphicon-log-out listglyphiconlogout"></span> Sign Out</Link>
                    </div>
                    <div class="col-sm-1">
                        <span class="glyphicon glyphicon-th listglyphicon1"></span>
                    </div>
                </div>
                <div class="sidenav">
                    <Link to="/ListpropertyWelcome" class="active">Location</Link>
                    <Link to="/ListPropertyDescribe">Details</Link>
                    <Link to="/ListPropertyAvailability">Availability</Link>
                    <Link to="/ListPropertyCharges">Pricing</Link>
                </div>
                <div>
                    {page === 1 && <ListPropertyWelcome onSubmit={this.nextPage} />}
                    {page === 2 && (
                        <ListPropertyDescribe
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                        />
                    )}
                    {page === 3 && (
                        <ListPropertyAvailability
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                        />
                    )}
                    {page === 4 && (
                        <ListPropertyCharges
                            previousPage={this.previousPage}
                            onSubmit={onSubmit}
                        />
                    )}
                </div>
            </div>
        )
    }
}

ListPropertySidebar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ListPropertySidebar