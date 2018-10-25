import React, { Component } from 'react';
import TodoPage from './modules/components/TodoPage'
import * as ActionRepo from './modules/flux/actions/ActionRepo';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		let formData = new FormData(this.refs.myForm);
		let text = formData.get("todoText");
		if (text) {
			ActionRepo.createTodo(text);
			this.refs.titleInput.value = "";
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					My TODO
					<form ref="myForm" onSubmit={this.handleFormSubmit}>
						<input ref="titleInput" name="todoText" required placeholder="Enter a Todo here"></input>
						<input type='submit' value="Create" onClick={this.handleFormSubmit} />
					</form>
					<TodoPage />
				</header>
			</div>
		);
	}
}

export default App;
