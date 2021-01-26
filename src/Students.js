import React from 'react';

const Students = ({ students, deleteStudent }) => {
	const studentList = students.map(student => {
		if (student.classroom > 200){
			return (
				<div className="student" key={student.id}>
					<div>Name: { student.name }</div>
					<div>Classroom: { student.classroom }</div>
					<div>Level: { student.level }</div>
					<button onClick={ () => { deleteStudent(student.id) } }>Delete Student</button>
				</div>
			);
		}else{
			return null;
		}
	});

	return(
		<div className="student-list">
			{ studentList }
		</div>
	)
}


export default Students;