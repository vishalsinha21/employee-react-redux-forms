export const addEmployee = (firstName, lastName, phone) => ({
  type: 'ADD_EMPLOYEE',
  firstName, lastName, phone
})

export const editEmployee = (id, firstName, lastName, phone) => ({
  type: 'EDIT_EMPLOYEE',
  id, firstName, lastName, phone
})

export const deleteEmployee = (id) => ({
  type: 'DELETE_EMPLOYEE',
  id
})
