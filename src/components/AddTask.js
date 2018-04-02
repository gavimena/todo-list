import React from 'react';

class AddTask extends React.Component {

	render() {
		return(
			<div className="add-task-content">
				<input className="add-task-input" type="text" placeholder="Write a Task" value={this.props.value} onChange={this.props.onChange}></input>
				<button className="add-task-button" type="submit" onClick={this.props.onSubmit} disabled={!this.props.value}> Add Task</button>
			</div>
		)
	}
}

export default AddTask;
