
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">bibliotheque</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/adherents">Adherents</Nav.Link>
     <Nav.Link href="/createad">addadherent</Nav.Link>
           
      <Nav.Link href="/livre">Livres</Nav.Link>
			          <Nav.Link href="/createl">addLivres</Nav.Link>
  
           <Nav.Link href="/emprunts">emprunts</Nav.Link>
     
  </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
