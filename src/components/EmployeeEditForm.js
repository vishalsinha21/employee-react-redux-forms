import React from 'react'
import { Field, reduxForm } from 'redux-form'


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

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  }

  if (!values.phone) {
    errors.phone = 'Required'
  } else if (isNaN(Number(values.phone))) {
    errors.phone = 'Must be a number'
  }

  return errors
}

const renderField = ({input, label, type, className, meta: {touched, error, warning}}) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className={className}/>
        {touched && (error && <p className="text-danger">{error}</p>)}
      </div>
    </div>
)

EmployeeEditForm = reduxForm({
  form: 'contact',
  validate
})(EmployeeEditForm)

export default EmployeeEditForm;
