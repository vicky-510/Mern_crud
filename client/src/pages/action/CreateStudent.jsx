import { GoArrowLeft } from "react-icons/go";
import '../../assets/styles/createStudent.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import API_URL from '../../components/api/Api.jsx';


const CreateStudent = () => {

  const [values, setValues] = useState({

    first_name: '',
    last_name: '',
    location: '',
    email: '',
    'dob-day': '',
    'dob-month': '',
    'dob-year': '',
    dob: '',
    education: '',
    about: '',

  });

  const navigate = useNavigate();


  // Verifying dob values are integers
  const handleDobChange = (e) => {
    const { name, value } = e.target;
    const updatedValues = { ...values, [name]: value };

    const isValidDay = /^(0?[0-9]|[12]\d|3[01])?$/.test(updatedValues['dob-day']);
    const isValidMonth = /^(0?[0-9]|1[0-2])?$/.test(updatedValues['dob-month']);
    const isValidYear = /^\d{0,4}$/.test(updatedValues['dob-year']);

    if (isValidDay && isValidMonth && isValidYear) {
      const day = updatedValues['dob-day'];
      const month = updatedValues['dob-month'];
      const year = updatedValues['dob-year'];

      if (day.length <= 2 && month.length <= 2 && year.length <= 4) {
        const dob = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        setValues({ ...updatedValues, dob });
      } else {
        setValues(updatedValues);
      }
    }
  };


  //posting student details into to db
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/create`, values)
      .then(res => {
        console.log('Response:', res);
        navigate('/');
      })
      .catch(err => console.error('Error:', err));
  };



  return (
    <>
      <div className="container mt-5 ">
        <Link to='/'><GoArrowLeft className="arrow" /></Link>
        <div className="row justify-content-start">
          <div className="col-md-9 offset-md-1">
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <label htmlFor="first_name" className="form-label mb-0 me-2" >First Name <span className="space1">:</span></label>
                    <input type="text" className="form-control fc-common" id="first_name" name="first_name"
                      onChange={(e) => setValues({ ...values, first_name: e.target.value })} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <label htmlFor="last_name" className="form-label mb-0 me-2" id="last">Last Name <span className="space7">:</span></label>
                    <input type="text" className="form-control fc-common" id="last_name" name="last_name"
                      onChange={(e) => setValues({ ...values, last_name: e.target.value })} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-start">
                    <label htmlFor="location" className="form-label mb-0 me-2">Location <span className="space2">:</span></label>
                    <input type="text" className="form-control fc-common" id="location" name="location"
                      onChange={(e) => setValues({ ...values, location: e.target.value })} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-start">
                    <label htmlFor="email" className="form-label mb-0 me-2">Email  <span className="space3">:</span></label>
                    <input type="email" className="form-control fc-common" id="email" name="email"
                      onChange={(e) => setValues({ ...values, email: e.target.value })} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex flex-wrap align-items-start">
                    <label htmlFor="dob-day" className="form-label mb-0 me-2">DOB <span className="space4">:</span></label>
                    <span className="dob_css">
                    <input type="text" className="form-control me-3 fc-common" id="dob-day" placeholder="DD" maxLength="2" name="dob-day" value={values['dob-day']} onChange={handleDobChange} />
                    <input type="text" className="form-control me-3 fc-common" id="dob-month" placeholder="MM" maxLength="2" name="dob-month" value={values['dob-month']} onChange={handleDobChange} />
                    <input type="text" className="form-control fc-common" id="dob-year" placeholder="YY" maxLength="4" name="dob-year" value={values['dob-year']} onChange={handleDobChange} />
                    </span>
                  </div>
                </div>


                <div className="col-md-12">
                  <div className="d-flex align-items-start">
                    <label htmlFor="education" className="form-label mb-0 me-2">Education  <span className="space5">:</span></label>
                    <input type="text" className="form-control fc-common" id="education" name="education"
                      onChange={(e) => setValues({ ...values, education: e.target.value })} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-start">
                    <label htmlFor="about" className="form-label mb-0 me-2">About <span className="space6">:</span></label>
                    <textarea className="form-control" id="about" name="about"
                      onChange={(e) => setValues({ ...values, about: e.target.value })} ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-dark button_form">Submit</button>
            </form>
          </div>
        </div>

      </div>

    </>
  )
}

export default CreateStudent