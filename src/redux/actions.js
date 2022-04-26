//action creators => function
export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data
  }
}

export const toggleTodoStatus = (todoId) => {
  return {
    type: 'todoList/toggleTodoStatus',
    payload: todoId
  }
}

export const searchFilterChange = (text) => {
  return {
    type: 'filers/searchFilterChange',
    payload: text
  }
}

export const statusFilterChange = (status) => {
  return {
    type: 'filers/statusFilterChange',
    payload: status
  }
}

export const priorityFilterChange = (priorities) => {
  return {
    type: 'filers/priorityFilterChange',
    payload: priorities
  }
}