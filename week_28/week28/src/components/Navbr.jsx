import React from "react";
import { Nav, Container, Form, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbr = () => {
  return (
    <Navbar expand="lg" variant="dark" className="navv">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>#ALL_IPHONES_PRODUCED</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container>
    </Navbar>
  );
};

export default Navbr;
