import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateUser } from "../services/UserService";
import { toast } from "react-toastify";

const ModalEditUser = (props) => {
  const {
    show,
    handleClose,
    dataUserEdit,
    handleUpdateTable,
    handleEditUserFrom,
  } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleEditUser = async () => {
    let res = await postCreateUser(name, job);
    if (res && res.createdAt) {
      handleClose();
      toast.success("A User is edit succeed");
      setName("");
      setJob("");
      handleUpdateTable({ first_name: name, id: dataUserEdit.id, email: job });
    } else {
      toast.error("A User is edit error");
    }
  };

  useEffect(() => {
    if (show) {
      setName(dataUserEdit.first_name);
      setJob(dataUserEdit.email);
    }
  }, [dataUserEdit]);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit a user</Modal.Title>
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
            <label for="form-label">Email</label>
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
        <Button variant="primary" onClick={() => handleEditUser()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEditUser;
