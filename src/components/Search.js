import React from 'react';
import Task from './Task';

class Search extends React.Component {
	render(){
		return(
			<div className="search-task-content">
				<input className="search-task-input" type="text" placeholder="Search Task" onChange={this.props.onFilter}></input>
			</div>
		)
	}
}

export default Search;
