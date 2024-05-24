// import React from 'react'
import '../assets/styles/viewStudent.css'
import SearchComponent from '../components/search/SearchComponent'
import { LiaUserEditSolid } from "react-icons/lia";
import { GoTrash } from "react-icons/go";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';
import API_URL from '../components/api/Api.jsx';
import DeleteModal from '../components/modal/DeleteModal.jsx';


const ViewStudent = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);



  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then(res => setStudents(res.data))
      .catch(err => console.log(err))

  }, []);

  // Utility function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  //Delete Modal 
  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);

  }

  const handleCloseModal = () => {
    setSelectedItem(false);
    setShowModal(false);

  }
  const handleDelete = () => {
    axios.delete(`${API_URL}/delete/${selectedItem}`)
      .then(() => window.location.reload())
      .catch(err => console.log(err));
      console.log('Deleting item:', selectedItem);
      handleCloseModal();
  }

  return (
    <>
      <div className="container mt-5 ">
        <p className="title">Student management system</p>
        <SearchComponent />
        <DeleteModal
              show={showModal}
              handleClose={handleCloseModal}
              handleDelete={handleDelete} />

        <div className="table-container">
          <div className="table-responsive">
            {students ?
              <table className="table custom-table custom-table-bordered-outside table-breathing">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Education</th>
                    <th>Action</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    students.map((student, i) =>
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{student.first_name}</td>
                        <td>{student.last_name}</td>
                        <td>{student.location}</td>
                        <td>{student.email}</td>
                        <td>{formatDate(student.dob)}</td>
                        <td>{student.education}</td>
                        <td ><Link to={`/update/${student.id}`} className='edit'><LiaUserEditSolid className='faCommon' /> Edit</Link></td>
                        <td onClick={() => handleShowModal(student.id)} className='hover_delete'><GoTrash className='faCommon1' /> Delete </td>
                      </tr>
                    )
                  }

                </tbody>
              </table>
             
              : <h2>No Records</h2>
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default ViewStudent