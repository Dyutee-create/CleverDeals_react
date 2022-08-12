import React  from 'react';
import './ListProperty.css';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';

const ListPropertyWelcome = props => {
    const { 
      handleSubmit
    } = props
    return (
        <div class="listproperty-first-div">
            <div class="container">
                <form onSubmit={handleSubmit}>
                    <div class="listproperty-form1">
                        <div class="listproperty-div1">
                            <div class="panel">
                                <h1 class="listproperty-h1"> Welcome! Verify the location of your rental</h1>
                            </div>
                            <div class="form-group">
                                <label class="listproperty-label7">Address:</label>
                                <div class="address-control">
                                    <Field
                                        name="address"
                                        type="text"
                                        component={renderField}
                                        label="Enter Address"
                                        class="address-control"
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="listpropertywel-btndiv">
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
})(ListPropertyWelcome)