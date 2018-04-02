import React from 'react';
import Task from './Task';

class TaskList extends React.Component {

	constructor(props) {
		super(props);
		this.filterTasks = this.filterTasks.bind(this);
		this.reverseTasks = this.reverseTasks.bind(this);
	}

	filterTasks(tasks) {
		if(this.props.filter) {
			tasks = tasks.filter(task => task.title.includes(this.props.filter.toLowerCase()))
		}
		return tasks;
	}
	// Copy and reverse list
	reverseTasks(tasks) {
		return tasks.slice(0).reverse();
	}

	render() {
		let filteredTasks = this.filterTasks(this.props.tasks);
		// Reverse list for rendering
		let reversedTaskList  = this. reverseTasks(filteredTasks);

		return(
			<div className="tasks-content">
				<ul className="task-list">
					{reversedTaskList.map(task =>
						<Task
							key={task.id}
							id={task.id}
							completed={task.completed}
							title={task.title}
							onDeleteTask={this.props.onDeleteTask}
							onTaskCompleted={this.props.onTaskCompleted}/>
					)}
						</ul>
			</div>
		)
	}
}

export default TaskList;
