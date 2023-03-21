import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">SaleBazar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/uploadproducts">UploadProducts</Nav.Link>
            <Nav.Link href="/orderlist">Order List</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header