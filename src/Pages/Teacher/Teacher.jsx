import React, { useState } from 'react';
import image from '../../images/Teacher.jpg';

export const Teacher = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John', Experience: 20, Qualification: 'Male', Subject: 'Reading' },
    { id: 2, name: 'Jane', Experience: 22, Qualification: 'Female', Subject: 'Sports' },
    { id: 3, name: 'Bob', Experience: 19, Qualification: 'Male', Subject: 'Music' },
    // Add more students here
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addMessage,setaddMessage]=useState(false);
  const [editedStudent, setEditedStudent] = useState({
    id:1,
    name: '',
    Experience: '',
    Qualification: '',
    Subject: '',
  });
  let studentToEdit={};
  const [newTeacher, setnewTeacher] = useState({
    id:students.length+1,
    name: '',
    Experience: '',
    Qualification: '',
   Subject: '',
  });


  const addModal=()=>{
    setaddMessage(true);
  }

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



  const savenew = () => {
    const updatedTeacher = [...students, newTeacher];
    setStudents(updatedTeacher);
    setaddMessage(false);
  };

  return (
    <div className=''>
       <div className="container">
          <div className="d-flex justify-content-center">
          <h1>Students Record</h1>
          </div>
          <div className="d-flex justify-content-end">
          <button onClick={addModal} className='btn btn-primary'>Add Teacher +</button>
          </div>
    </div>
      <br></br>
      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Experience</th>
            <th>Qualification</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <img src={image} alt="nothing" style={{ height: '3vh', width: '3vh', borderRadius: '20px' }} />
              </td>
              <td>{student.name}</td>
              <td>{student.Experience}</td>
              <td>{student.Qualification}</td>
              <td>{student.Subject}</td>
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

          {/* <div className="modal border-primary">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Edit Student</h2>
            <label>Name:</label>
            <input
              type="text"
              value={editedStudent.name}
              onChange={(e) => setEditedStudent({ ...editedStudent, name: e.target.value })}
            />
            <label>Experience:</label>
            <input
              type="number"
              value={editedStudent.Experience}
              onChange={(e) => setEditedStudent({ ...editedStudent, Experience: e.target.value })}
            />
            <label>Qualification:</label>
            <input
              type="text"
              value={editedStudent.Qualification}
              onChange={(e) => setEditedStudent({ ...editedStudent, Qualification: e.target.value })}
            />
            <label>Subject:</label>
            <input
              type="text"
              value={editedStudent.Subject}
              onChange={(e) => setEditedStudent({ ...editedStudent, Subject: e.target.value })}
            />
            <button onClick={saveChanges}>Save Changes</button>
          </div>
        </div> */}
          

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
            <label>Experience:</label>
            <input
              type="number"
              value={editedStudent.Experience}
              onChange={(e) => setEditedStudent({ ...editedStudent, Experience: e.target.value })}
            />
            <label>Qualification:</label>
            <input
              type="text"
              value={editedStudent.Qualification}
              onChange={(e) => setEditedStudent({ ...editedStudent, Qualification: e.target.value })}
            />
            <label>Subject:</label>
            <input
              type="text"
              value={editedStudent.Subject}
              onChange={(e) => setEditedStudent({ ...editedStudent, Subject: e.target.value })}
            />
            <button onClick={saveChanges}>Save Changes</button>
              
          

        </div>

      }

{addMessage &&
        <div style={{marginTop:"20%"}} className='d-flex justify-content-center flex-column align-items-center'>

          <h3>ADD TEACHER</h3>
          

         
          <label>Name:</label>
          <input
              type="text"
              value={newTeacher.name}
              onChange={(e) => setnewTeacher({ ...newTeacher, name: e.target.value })}
            />
            <label>Experience</label>
            <input
              type="number"
              value={newTeacher.Experience}
              onChange={(e) => setnewTeacher({ ...newTeacher, Experience: e.target.value })}
            />
            <label>Qualification</label>
            <input
              type="text"
              value={newTeacher.Qualification}
              onChange={(e) => setnewTeacher({ ...newTeacher, Qualification: e.target.value })}
            />
            <label>Subject</label>
            <input
              type="text"
              value={newTeacher.Subject}
              onChange={(e) => setnewTeacher({ ...newTeacher, Subject: e.target.value })}
            />
            <button onClick={savenew}>Save Changes</button>
              
          

        </div>
      }
    </div>
  );
};
