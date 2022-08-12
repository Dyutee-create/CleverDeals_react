import React from 'react';
import './ListProperty.css';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';

const ListPropertyAvailability = props => {
    const { handleSubmit } = props
    return (
        <div class="listproperty-first-div">
            <div class="container">
                <form onSubmit={handleSubmit}>
                    <div class="listproperty-form3">
                        <div class="listproperty-div3">
                            <div class="panel">
                                <h1>Availability</h1>
                            </div>
                            <h2>Already know when you would like your property to be available?</h2>
                            <h2>You can also make changes after publishing your listing.</h2>
                            <div class="listproperty-date">
                                <div class="form-group listproperty-left">
                                    <label class="listproperty-label1">Start date:</label>
                                    <div class="date-control">
                                        <Field
                                            name="startdate"
                                            type="date"
                                            component={renderField}
                                            label="startdate"
                                            class="form-control3"
                                        />
                                    </div>
                                </div>
                                <div class="form-group listproperty-right">
                                    <label class="listproperty-label2">End date:</label>
                                    <div class="date-control">
                                        <Field
                                            name="enddate"
                                            type="date"
                                            component={renderField}
                                            label="endate"
                                            class="form-control3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="listproperty-btndiv">
                        <button type="submit" className="next" class="lisproperty-btn">Save changes</button> 
                    </div>
                </form>
            </div>
        </div>     
    )
}
  
  export default reduxForm({
    form: 'listproperty', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  })(ListPropertyAvailability)