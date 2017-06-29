import React from 'react'
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form'
import { validate } from './Validations'
import { renderField } from './Form'

class EmployeeCreateForm extends React.Component {

  render() {
    const { onSubmit, handleSubmit } = this.props
    
    return (
        <form className="add-employee-form" onSubmit={handleSubmit(onSubmit)}>
          <legend>Add Employee</legend>
          <div className="form-group">
            <Field className="form-control" component={renderField} name="firstName" type="text" label="First Name" />
          </div>
          <div className="form-group">
            <Field className="form-control" component={renderField} name="lastName" type="text" label="Last Name" />
          </div>
          <div className="form-group">
            <Field className="form-control" component={renderField} name="phone" type="text" label="Phone" />
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
  form: 'contact',
  validate
})(EmployeeCreateForm)

export default EmployeeCreateForm;
