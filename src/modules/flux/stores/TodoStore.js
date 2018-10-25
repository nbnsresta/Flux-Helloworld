import { EventEmitter } from 'events';
import dispatcher from '../FluxDispatcher'

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos = [
			{
				id: 0,
				title: "Do your homework",
				isDone: true
			},
			{
				id: 1,
				title: "Make your meal",
				isDone: false
			},
			{
				id: 2,
				title: "Study given story",
				isDone: false
			}]
	}

	getAll() {
		return this.todos;
	}

	createTodo(todoTitle) {
		this.todos.push({ id: Date.now(), title: todoTitle, isDone: false });
		console.log(todoTitle);
		this.emit("change");
	}

	updateTodo(todo) {
		let index = this.todos.find((element) => element.id === todo.id);
		if (index >= 0) {
			this.todos[index] = todo;
			this.emit("change");

			console.log("Todo changed..")
		}
		console.log("Todo not changed..")
	}

	handleAction(action) {
		switch (action.type) {
			case "CREATE_TODO": {
				this.createTodo(action.title);
				console.log("Todo being created", action.title)
				break;
			}
			case "UPDATE_TODO": {
				this.updateTodo(action.todo);
				break;
			}
			default:
		}
	}
}

const todoStore = new TodoStore();
window.todoStore = todoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));

export default todoStore;