import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import adsc from '../images/atharva2.png';
import { Link } from 'react-router-dom';

export default class NavbarComp extends Component {
  render() {
    return (
      <>
        {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-dark mb-3" style={{ height:'10vh', paddingBottom:'0px', paddingTop:'0px', marginBottom:'0px'}}>
            <Container fluid >
              <Link to='/'><Navbar.Brand href="#">
                <img
                  src={adsc}
                  alt=""
                  className="img-fluid"
                  style={{ maxHeight: '50px', marginRight: '10px' }}
                />
              </Navbar.Brand>
              </Link>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ borderColor: 'white' }} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Menu</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3" placement="end" >
                      <Link to="/about" style={{ textDecoration: 'none' }}>
                        <Nav.Link href="#about" style={{ color: 'white' }}>About</Nav.Link>
                      </Link>
                      <Link to="/events" style={{ textDecoration: 'none' }}>
                        <Nav.Link href="#events" style={{ color: 'white' }}>Events</Nav.Link>
                      </Link>
                      <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <Nav.Link href="#contact" style={{ color: 'white' }}>Contacts</Nav.Link>
                      </Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
                <div className="d-flex justify-content-end">
                  <Form className="d-flex">
                    <Link to='/login'>
                    <Button style={{ background: '#EF8535', border: 'none' }}>Login</Button>
                    </Link>
                  </Form>
                </div>
              </div>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
}
