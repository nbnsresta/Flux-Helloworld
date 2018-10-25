import dispatcher from '../FluxDispatcher';

export function createTodo(todoTitle) {
  dispatcher.dispatch({ type: "CREATE_TODO", title: todoTitle })
}

export function updateTodo(todo) {
  dispatcher.dispatch("UPDATE_TODO", todo)
}