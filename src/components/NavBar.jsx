import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

import { products } from "../data/productos";

const categorias = productos.map((item => item.categoria));

export const NavBar = () => {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to="/">
          <Navbar.Brand>CositasRicas</Navbar.Brand>
          </NavLink>
          
          <Nav className="me-auto">
            {[...uniqueCategorias].map((item) => (<Nav.Link as={NavLink} key={item} to={"${item}"}>
               {item} 
            </Nav.Link>
            ))}
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    )
}
