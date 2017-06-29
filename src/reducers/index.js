import { combineReducers } from 'redux'
import employees from './employees'
import { reducer as formReducer } from 'redux-form'

const employeeApp = combineReducers({
  employees,
  form: formReducer
})

export default employeeApp
