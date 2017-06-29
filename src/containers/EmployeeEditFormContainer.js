import { connect } from 'react-redux'
import EmployeeEditForm from '../components/EmployeeEditForm'
import { deleteEmployee, editEmployee } from '../actions'
import _ from 'lodash';
import { browserHistory } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  employee: _.find(state.employees, {'id': ownProps.id}),
  initialValues: _.find(state.employees, {'id': ownProps.id})
})

const mapDispatchToProps = (dispatch) => ({
  onDelete: (values) => {
    dispatch(deleteEmployee(values.id))
    browserHistory.push('/')
  },
  onEdit: (values) => {
    dispatch(editEmployee(values.id, values.firstName, values.lastName, values.phone))
    browserHistory.push('/')
  }
})

const EmployeeEditFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeEditForm)

export default EmployeeEditFormContainer
