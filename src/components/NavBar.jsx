import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { CartWidget } from "./CartWidget";
import "../Styles/NavBar.css";


export const NavBar = () => {
  
  const [categories, setCategories] = useState();

  useEffect(() => {
    const db = getFirestore();
    const data = collection(db, "items");

    getDocs(data).then((snapshot) => {
      const items = snapshot.docs.map(doc => doc.data());
      setCategories(items.map(i => i.categoryId));
    })
  
  },[])
  
  const uniqueCategories = new Set(categories);
  
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar-order' data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink to="/" className="link">
            <Navbar.Brand className="commerce-name">Cositas Ricas</Navbar.Brand>
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
            
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Nav className="me-auto">
              {[...uniqueCategories].map(category => (
                <Nav.Link as={NavLink} key={category} to={`/category/${category}`}>
                    <span className='Nav-Link nav-item'>{category}</span>
                </Nav.Link>
              ))}
            </Nav>
            <Nav>
              <CartWidget /> 
            </Nav>
          </div>
        </div>
      </nav>
    </header>
  )
}
