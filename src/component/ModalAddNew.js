import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateUser } from "../services/UserService";
import { toast } from "react-toastify";

const ModalAddNew = (props) => {
  const { show, handleClose, handleUpdateTable } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  //   const handleClose = () => {};

  const handleSaveUser = async () => {
    let res = await postCreateUser(name, job);
    if (res && res.id) {
      handleClose();
      toast.success("A User is created succeed");
      setName("");
      setJob("");
      handleUpdateTable({ first_name: name, id: res.id, email: job });
    } else {
      toast.error("A User is created error");
    }
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add new user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="form-group mb-3">
            <label for="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div class="form-group mb-3">
            <label for="form-label">Job</label>
            <input
              type="text"
              class="form-control"
              value={job}
              onChange={(event) => setJob(event.target.value)}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleSaveUser()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddNew;
