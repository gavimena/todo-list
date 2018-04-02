import React, { Component } from 'react';
import '../scss/main.css';
import Header from './Header';
import Search from './Search';
import AddTask from './AddTask';
import TaskList from './TaskList';


class App extends Component {
	constructor(props){
		super(props)
			this.state = {
				tasks: [],
				filter: '',
				addInput: ''
			}
		this.onFilter = this.onFilter.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.markTaskCompleted = this.markTaskCompleted.bind(this);
		this.handleDeleteTask = this.handleDeleteTask.bind(this);
	}

	componentDidMount() {
		//This petition finished with 1 for the userId choosen
		fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
		.then(response => response.json())
		.then(json => {
			this.setState({
				tasks: json
			});
		});
	}

	//Method to get the new task on input
	onChange(event) {
		this.setState({
			addInput: event.target.value
		});
	}

	//Method to add new task onClick button
	onSubmit(event) {
		event.preventDefault();

		let newTask = {
			id: Date.now(),
			title: this.state.addInput,
			completed: false
		};

		this.setState((prevState) => ({
			tasks: prevState.tasks.concat(newTask),
			addInput: ''
		}));
	}

	//Method to mark a task as completed
	markTaskCompleted(taskId) {
		let updatedTasks = this.state.tasks.map(task => {
			if(taskId === task.id) {
				task.completed = !task.completed;
			}
			return task;
		});

		this.setState({
			tasks: updatedTasks
		});
	}

	//Method to delete tasks
	handleDeleteTask(taskId) {
		// console.log("handleDeleteTask", task);
		let updatedTasks = this.state.tasks.filter(task => {
			return task.id !== taskId;
		});

		this.setState({
			tasks: updatedTasks
		});
	}

	//Method to show tasks serched
	onFilter(event) {
		this.setState({
			filter: event.target.value
		});
	}

	render() {
		return (
			<div className="app">
				<Header />
				<Search filter={this.filter}
						onFilter={this.onFilter}
						tasks={this.state.tasks} />
				<AddTask value={this.state.addInput}
							onChange={this.onChange}
							onSubmit={this.onSubmit} />
				<TaskList tasks={this.state.tasks}
							filter={this.state.filter}
							onTaskCompleted={this.markTaskCompleted}
							onDeleteTask={this.handleDeleteTask}/>
			</div>
		);
	}
}

export default App;
