import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../asset/image/logo.png";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Header = (props) => {
  const navigate = useNavigate();
  const { logout, user } = useContext(UserContext);
  const [hideHeader, setHideHeader] = useState(false);

  // useEffect(() => {
  //   if (window.location.pathname === "/login") {
  //     setHideHeader(true);
  //   }
  // }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("Logout success");
  };
  console.log(user);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" activeKey="/">
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: "25px" }}>
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top mx-2"
              alt="React Bootstrap logo"
            />
            <span>Manage</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {((user && user.auth) || window.location.pathname === "/") && (
              <>
                <Nav className="me-auto">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                  {/* {user && user.auth === true && ( */}
                  <NavLink to="/users" className="nav-link">
                    Manage Users
                  </NavLink>
                  {/* )} */}
                </Nav>
                <Nav>
                  {user && user.email && (
                    <span className="nav-link">Welcome {user.email}</span>
                  )}
                  <NavDropdown title="Setting" className="justify-content-end">
                    {user && user.auth === true ? (
                      <NavDropdown.Item onClick={() => handleLogout()}>
                        Logout
                      </NavDropdown.Item>
                    ) : (
                      <NavLink to="/login" className="dropdown-item">
                        Login
                      </NavLink>
                    )}
                  </NavDropdown>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
