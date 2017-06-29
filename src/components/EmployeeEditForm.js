import React from 'react'
import { Field, reduxForm } from 'redux-form'


class EmployeeEditForm extends React.Component {

  render() {
    const { employee, onDelete, onEdit, handleSubmit } = this.props

    return (
        <form className="edit-employee-form" onSubmit={handleSubmit(onDelete)}>
          <legend>Edit Employee</legend>
          <div className="form-group">
            <label>First Name</label>
            <Field className="form-control" value={employee.firstName} component="input" name="firstName" type="text" placeholder="First Name"/>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <Field className="form-control" value={employee.lastName} component="input" name="lastName" type="text" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <Field className="form-control" value={employee.phone} component="input" name="phone" type="text" placeholder="Phone" />
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
  form: 'contact'
})(EmployeeEditForm)

export default EmployeeEditForm;
