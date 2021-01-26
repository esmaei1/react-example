import React, { Component } from 'react';
import Students from "./Students";
import AddStudent from './AddStudent'

class App extends Component{
    state = {
        students: [
            { name: 'Esmaeil', classroom: 206, level: 'A', id: 1 },
            { name: 'Hasan', classroom: 104, level: 'B', id: 2 },
            { name: 'Ahmad', classroom: 303, level: 'C', id: 3 },
        ]
    }

    addStudent = (student) => {
        student.id = Math.random();
        let students = [...this.state.students, student];
        this.setState({
            students: students
        })
    }

    deleteStudent = (id) => {
        let students = this.state.students.filter(student => {
            return student.id !== id;
        });
        this.setState({
            students: students
        });
    }

    componentDidMount() {
        console.log('component did mounted');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
    }

    render() {
        return(
            <div className="App">
                <h1>React App</h1>
                <p>this is a react app.</p>
                <Students students={ this.state.students } deleteStudent={ this.deleteStudent }/>
                <AddStudent addStudent={ this.addStudent }/>
            </div>
        )
    }
}

export default App;
