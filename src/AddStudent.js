import React, { Component } from 'react';

class AddStudent extends Component{

	state = {
		name: null,
		classroom: null,
		level: null,
		id: null
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addStudent(this.state);
	}

	render() {
		return(
			<div className="form">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={this.handleChange}/>
					<label htmlFor="classroom" onChange={this.handleChange}>Classroom:</label>
					<input type="text" id="classroom" onChange={this.handleChange}/>
					<label htmlFor="level">Level:</label>
					<input type="text" id="level" onChange={this.handleChange}/>
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}


export default AddStudent;