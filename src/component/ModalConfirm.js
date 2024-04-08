import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../services/UserService";
import { toast } from "react-toastify";

const ModalConfirm = (props) => {
  const { show, handleClose, dataUserDelete, handleDeleteUserFrom } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const confirmDelete = async () => {
    let res = await deleteUser(dataUserDelete.id);
    if (res && +res.statusCode === 204) {
      toast.success("Delete Succeed!");
      handleClose();
      handleDeleteUserFrom(dataUserDelete);
    } else {
      toast.error("Delete Error!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add new user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <>This action can't be undone!</> <br />
          <>
            Are you sure to delete this user ? <br />
            <b>email = "{dataUserDelete.email}"</b>
          </>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => confirmDelete()}>
          Yes
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirm;
