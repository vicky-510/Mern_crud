import { Modal, Button } from 'react-bootstrap';
import { GoTrash } from "react-icons/go";
import '../../assets/styles/modal.css'; 

// eslint-disable-next-line react/prop-types
const DeleteModal = ({ show, handleClose, handleDelete }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="false"
      centered 
      >

      <Modal.Header>
      </Modal.Header>
      <Modal.Body>
        <GoTrash className='trash-icon' /><br/> 
        Are you sure you want to <br/>Delete</Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose} className="custom-button cancel-btn">
        Cancel
      </Button>
      <Button variant="danger" onClick={handleDelete} className="custom-button delete-btn">
        Yes
      </Button>



      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
