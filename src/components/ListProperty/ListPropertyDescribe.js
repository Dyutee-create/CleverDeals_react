import React from 'react';
import './ListProperty.css';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';

const ListPropertyDescribe = props => {
    const { handleSubmit } = props
    return (
        <div class="listproperty-first-div">
            <div class="container">
                <form onSubmit={handleSubmit}>
                    <div class="listproperty-form2">
                        <div class="listproperty-div2">
                            <div class="panel">
                                <h2 class="listproperty-h2">Describe your property</h2> 
                            </div>
                            <p>Start out with a descriptive headline and a detailed summary of your property.</p>
                            <div class="form-group">
                                <div class="headline-control"> 
                                    <Field
                                        name="headline"
                                        type="text"
                                        component={renderField}
                                        label="headline"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="headline-control"> 
                                    <Field
                                        name="propdesc"
                                        type="text"
                                        component={renderField}
                                        label="Property Description"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="propdetails-control">
                                    <Field
                                        name="proptype"
                                        type="text"
                                        component={renderField}
                                        label="Property Type"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="propdetails-control">
                                    <Field
                                        name="noofrooms"
                                        type="text"
                                        component={renderField}
                                        label="Enter No of rooms"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="propdetails-control">
                                    <Field
                                        name="noofpeople"
                                        type="text"
                                        component={renderField}
                                        label="Enter no of people"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="propdetails-control">
                                    <Field
                                        name="noofbathrooms"
                                        type="text"
                                        component={renderField}
                                        label="Enter no of bathrooms"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="listproperty-btndiv">
                        <button type="submit" className="next" class="lisproperty-btn">Save Changes</button>
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
})(ListPropertyDescribe)