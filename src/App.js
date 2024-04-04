import "./App.scss";
import { Fragment, useState } from "react";
import Header from "./component/Header";
import TableUser from "./component/TableUser";
import Container from "react-bootstrap/Container";
import ModalAddNew from "./component/ModalAddNew";

function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const handleClose = () => {
    setIsShowModalAddNew(false);
  };

  return (
    <Fragment>
      <div className="app-container">
        <Header />
        <Container>
          <div className="my-3 d-flex justify-content-between">
            <h4>
              <b>List User</b>
            </h4>
            <button
              className="btn btn-primary"
              onClick={() => setIsShowModalAddNew(true)}
            >
              Add new user
            </button>
          </div>
          <TableUser />
        </Container>
        <ModalAddNew show={isShowModalAddNew} handleClose={handleClose} />
      </div>
    </Fragment>
  );
}

export default App;
