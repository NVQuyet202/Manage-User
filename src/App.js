import "./App.scss";
import { Fragment, useEffect, useState } from "react";
import Header from "./component/Header";
import TableUser from "./component/TableUser";
import Container from "react-bootstrap/Container";
import { ToastContainer, toast } from "react-toastify";
import Home from "./component/Home";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./component/Login";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { user, loginContext } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginContext(
        localStorage.getItem("email"),
        localStorage.getItem("token")
      );
    }
  }, []);

  return (
    <Fragment>
      <div className="app-container">
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<TableUser />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnClick={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
}

export default App;
