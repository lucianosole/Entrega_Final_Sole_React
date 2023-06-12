import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand to={`/`} className="text-white">E-Commerce Juche</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to={`/`} className={({isActive}) => isActive ? "btn btn-primary m-1" : "btn btn-secondary m-1"}>Home</NavLink>
              <NavLink to={`/categoria/indumentaria`} className={({isActive}) => isActive ? "btn btn-primary m-1" : "btn btn-secondary m-1"}>Indumentaria </NavLink>
              <NavLink to={`/categoria/proteccion`} className={({isActive}) => isActive ? "btn btn-primary m-1" : "btn btn-secondary m-1"}>Protecciones </NavLink>
              <NavLink to={`/categoria/accesorios`} className={({isActive}) => isActive ? "btn btn-primary m-1" : "btn btn-secondary m-1"}>Accesorios </NavLink>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export { NavBar };
