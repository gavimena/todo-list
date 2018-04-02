import React from 'react';

class Task extends React.Component {
	constructor(props) {
		super(props);
		this.markCompleted = this.markCompleted.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}

	markCompleted() {
		this.props.onTaskCompleted(this.props.id);
	}

	deleteTask() {
		this.props.onDeleteTask(this.props.id);
	}

	render() {
		let elementClassName = (this.props.completed) ?
		'element-list task-completed': 'element-list'
		return(
			<li className={elementClassName}>
				<input className="task-checkbox" type="checkbox" onChange={this.markCompleted} checked={this.props.completed}></input>
				<p className="task-title">{this.props.title}</p>
				<button className="delete-btn" onClick={this.deleteTask}></button>
			</li>
		);
	}
}

export default Task;
