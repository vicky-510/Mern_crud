import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import '../../assets/styles/viewStudent.css'
import { Link } from 'react-router-dom';

export default function SearchComponent() {
  return (
    <div className="d-flex justify-content-between align-items-center search-field" >
      <InputGroup className="inputGroup">
        <Form.Control
          type="text"
          placeholder="Search"
          aria-label="Search"
          className='input-field'
        />
        <InputGroup.Text className='input-txt'>
          <FaSearch className='input-icon' />
        </InputGroup.Text>
      </InputGroup>

      <Link to='/create' ><Button variant="dark" className="ml-3">ADD</Button></Link>

    </div>
  )
}
