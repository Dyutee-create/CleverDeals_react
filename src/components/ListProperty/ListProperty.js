// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import ListPropertySidebar from './ListPropertySidebar';
import showResults from './showResults';
//import DetailsComponent from '../DetailsView/DetailsComponent';

const ListProperty = props => {
    return (
        <div>
            <ListPropertySidebar onSubmit={showResults}/>
        </div>
    )

}

export default ListProperty;