import React from 'react';
import todoStore from '../flux/stores/TodoStore'
import * as ActionRepo from '../flux/actions/ActionRepo';

class TodoPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: todoStore.getAll()
		}

		this.updateTodo = this.updateTodo.bind(this);
	}

	componentWillMount() {
		todoStore.on("change", () => {
			this.setState({
				todos: todoStore.getAll()
			})
		});
	}

	updateTodo(todo) {
		todo.isDone = !todo.isDone;
		ActionRepo.updateTodo(todo);
	}

	render() {
		return (
			<ul>
				{this.state.todos.map((todo, index) =>
					<li key={index}>
						<input id={"index" + index} type="checkbox" defaultChecked={todo.isDone} onChange={() => this.updateTodo(todo)} />
						<label htmlFor={"index" + index}>{todo.title}</label> <br />
					</li>)}
			</ul>
		);
	}
}

export default TodoPage;