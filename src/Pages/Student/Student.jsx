import React, { useState } from 'react';
import './student.css'


export const Student = () => {


  const [students, setStudents] = useState([
    { id: 1, name: 'John', age: 20, gender: 'Male', hobbies: 'Reading' },
    { id: 2, name: 'Jane', age: 22, gender: 'Female', hobbies: 'Sports' },
    { id: 3, name: 'Bob', age: 19, gender: 'Male', hobbies: 'Music' },
    // Add more students here
  ]);
  const [addMessage,setaddMessage]=useState(false);

  const addModal=()=>{
    setaddMessage(true);
  }


 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedStudent, setEditedStudent] = useState({
    id:1,
    name: '',
    age: '',
    gender: '',
   hobbies: '',
  });
  const [newStudent, setnewStudent] = useState({
    id:students.length+1,
    name: '',
    age: '',
    gender: '',
   hobbies: '',
  });
  let studentToEdit={};

  const handleEditClick = (id) => {
    console.log("reached")
     studentToEdit = students.find((student) => student.id === id);
    if (studentToEdit) {
      console.log("reached")
      setIsModalOpen(true);
      return;

    }
  };


  const handleDeleteClick = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const savenewStudent = () => {
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    setaddMessage(false);
  };

  
  

  const saveChanges = () => {
    const updatedStudents=[];
   students.map((student) => {
      console.log(editedStudent);
      if (student.id === editedStudent.id) {
       
       updatedStudents.push(editedStudent) ;
      }
      else{
        updatedStudents.push(student);
      }
      
     
    });
    setStudents(updatedStudents);
    console.log(updatedStudents);
    setIsModalOpen(false);
  };

  return (
    
    <div>
    <div className="container">
          <div className="d-flex justify-content-center">
          <h1>Students Record</h1>
          </div>
          <div className="d-flex justify-content-end">
          <button onClick={addModal} className='btn btn-primary'>Add Student +</button>
          </div>
    </div>
      <br></br>
      <table className='table'>
        <thead>
          
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>{student.hobbies}</td>
              <td>
                <button onClick={() => handleEditClick(student.id)}>Edit</button>
                <button onClick={() => handleDeleteClick(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen &&
        <div>


          

          <label>ID:</label>
          <input
              type="number"
              value={editedStudent.id}
              onChange={(e) => setEditedStudent({ ...editedStudent, id: e.target.value })}
            />
          <label>Name:</label>
          <input
              type="text"
              value={editedStudent.name}
              onChange={(e) => setEditedStudent({ ...editedStudent, name: e.target.value })}
            />
            <label>Age:</label>
            <input
              type="number"
              value={editedStudent.age}
              onChange={(e) => setEditedStudent({ ...editedStudent, age: e.target.value })}
            />
            <label>Gender</label>
            <input
              type="text"
              value={editedStudent.gender}
              onChange={(e) => setEditedStudent({ ...editedStudent, gender: e.target.value })}
            />
            <label>Hobbies</label>
            <input
              type="text"
              value={editedStudent.hobbies}
              onChange={(e) => setEditedStudent({ ...editedStudent, hobbies: e.target.value })}
            />
            <button onClick={saveChanges}>Save Changes</button>
              
          

        </div>
      }
      {addMessage &&
        <div style={{marginTop:"20%"}} className='d-flex justify-content-center flex-column align-items-center'>

          <h3>ADD STUDENT</h3>
          

         
          <label>Name:</label>
          <input
              type="text"
              value={newStudent.name}
              onChange={(e) => setnewStudent({ ...newStudent, name: e.target.value })}
            />
            <label>Age:</label>
            <input
              type="number"
              value={newStudent.age}
              onChange={(e) => setnewStudent({ ...newStudent, age: e.target.value })}
            />
            <label>Gender</label>
            <input
              type="text"
              value={newStudent.gender}
              onChange={(e) => setnewStudent({ ...newStudent, gender: e.target.value })}
            />
            <label>Hobbies</label>
            <input
              type="text"
              value={newStudent.hobbies}
              onChange={(e) => setnewStudent({ ...newStudent, hobbies: e.target.value })}
            />
            <button onClick={savenewStudent}>Save Changes</button>
              
          

        </div>
      }
    </div>
  )
}
