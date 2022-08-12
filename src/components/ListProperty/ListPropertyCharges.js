import React from 'react';
import './ListProperty.css';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
//import results from './showResults';

const ListPropertyCharges = props => {
    const { handleSubmit } = props
    const successMsg = "Record is successfully inserted";
    //const msg = results.status;
    return (
        <div class="listproperty-first-div">
            <div class="container">
                <form onSubmit={handleSubmit}>
                    <div class="listproperty-form4">
                        <div class="listproperty-div4">
                            <div class="panel">
                                <h1>How much do you want to charge?</h1>
                            </div>
                            <h2>We recommend starting with a low price to get a few bookings and earn some initial guest reviews. You can update your rates at any time.</h2>
                            <div class="form-group">
                                <label class="listproperty-label3">Currency:</label>
                                <div class="address-control">
                                    <Field
                                        name="currency"
                                        type="text"
                                        component={renderField}
                                        label="Enter Currency"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="listproperty-label4">Nightly Base Rate:</label>
                                <div class="address-control">
                                    <Field
                                        name="baserate"
                                        type="text"
                                        component={renderField}
                                        label="Enter the baserate"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="listproperty-label5">Minimum Stay:</label>
                                <div class="address-control">
                                    <Field
                                        name="minstay"
                                        type="text"
                                        component={renderField}
                                        label="Enter minimum number of night stays"
                                    />   
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div class="listproperty-form5">
                        <div class="listproperty-div5">
                            <div class="panel">
                                <h1>Fees</h1>
                            </div>
                            <h2>You can add fees to your listing or skip this step. Additional fees can be added later.</h2>
                            <div class="form-group">
                                <label class="listproperty-label6">Cleaning Fee:</label>
                                <div class="address-control">
                                    <Field
                                        name="cleaningfee"
                                        type="text"
                                        component={renderField}
                                        label="Enter Cleaning Fee"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="listproperty-btndiv">
                        <button type="submit" className="next" class="lisproperty-btn">Submit</button> 
                    </div>
                    <div class="listproperty-successmsg">
                        {successMsg}
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
  })(ListPropertyCharges)