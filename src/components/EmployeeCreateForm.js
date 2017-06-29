import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form'

class EmployeeCreateForm extends React.Component {

  render() {
    const { handleSubmit } = this.props
    
    return (
        <form className="add-employee-form" onSubmit={handleSubmit(this.props.onSubmit)}>
          <legend>Add Employee</legend>
          <div className="form-group">
            <label>First Name</label>
            <Field className="form-control" component="input" name="firstName" ref="firstName" type="text" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <Field className="form-control" component="input" name="lastName" ref="lastName" type="text" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <Field className="form-control" component="input" name="phone" ref="phone" type="text" placeholder="Phone" />
          </div>
          <hr/>

          <button type="submit" className="btn">Create</button>
           &nbsp;&nbsp;
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
  }
}


EmployeeCreateForm = reduxForm({
  form: 'contact'
})(EmployeeCreateForm)

export default EmployeeCreateForm;
