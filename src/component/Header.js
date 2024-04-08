import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../asset/image/logo.png";
import { useLocation, NavLink } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();

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
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/users" className="nav-link">
                Manage Users
              </NavLink>
            </Nav>
            <Nav>
              <NavDropdown title="Setting" className="justify-content-end">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
