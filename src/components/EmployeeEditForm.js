import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validate } from './Validations'
import { renderField } from './Form'

class EmployeeEditForm extends React.Component {

  render() {
    const { employee, onDelete, onEdit, handleSubmit } = this.props

    return (
        <form className="edit-employee-form" onSubmit={handleSubmit(onDelete)}>
          <legend>Edit Employee</legend>
          <div className="form-group">
            <Field className="form-control" value={employee.firstName} component={renderField} name="firstName" type="text" label="First Name"/>
          </div>
          <div className="form-group">
            <Field className="form-control" value={employee.lastName} component={renderField} name="lastName" type="text" label="Last Name" />
          </div>
          <div className="form-group">
            <Field className="form-control" value={employee.phone} component={renderField} name="phone" type="text" label="Phone" />
          </div>
          <hr/>
          <button type="button" className="btn" onClick={handleSubmit(onEdit)}>Edit</button>
            &nbsp;&nbsp;
          <button type="submit" className="btn btn-danger">Delete</button>
        </form>
    );
  }
}

EmployeeEditForm = reduxForm({
  form: 'contact',
  validate
})(EmployeeEditForm)

export default EmployeeEditForm;
