import { connect } from 'react-redux'
import EmployeeCreateForm from '../components/EmployeeCreateForm'
import { addEmployee } from '../actions'
import { browserHistory } from 'react-router';

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch(addEmployee(values.firstName, values.lastName, values.phone))
    browserHistory.push('/')
  }
})

const EmployeeCreateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeCreateForm)

export default EmployeeCreateFormContainer
