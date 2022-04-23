import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from "../../firebase.init"

const Header = () => {
    const navigate = useNavigate()
    const [user]=useAuthState(auth);

    const handleSignOut = ()=>{
      signOut(auth)
    }
    return (
        <div>
           <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="#home">Wild Life Photography</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about_me">About-Me</Nav.Link>
        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
       { user? <button onClick={handleSignOut}>Sign out</button>: <button as={Link} to="/regester">Regester</button>}
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;