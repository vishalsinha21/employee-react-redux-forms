import React from 'react'
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form'

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

EmployeeCreateForm = reduxForm({
  form: 'contact',
  validate
})(EmployeeCreateForm)

export default EmployeeCreateForm;
