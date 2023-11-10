import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CositasRicas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Tortas Clasicas</Nav.Link>
            <Nav.Link href="">Tortas Personalizadas</Nav.Link>
            <Nav.Link href="">Tartas Frutales</Nav.Link>
            <Nav.Link href="">Tartas Personalizadas</Nav.Link>
            <Nav.Link href="">Box Dulce</Nav.Link>
            <Nav.Link href="">Pedidos Especiales</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    )
}
