import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar2 extends Component {
  render() {
    return (
      <>
        {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
              <Navbar.Brand href="#">ADSC</Navbar.Brand>
              <div style={{display:'flex', flexDirection:'row', justifyContent:"end"}}>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 ps-2" placement="end">
                    <Nav.Link href="#action1">Upswing</Nav.Link>
                    <Nav.Link href="#action2">About</Nav.Link>
                    <Nav.Link href="#action3">Events</Nav.Link>
                    <Nav.Link href="#action4">Contacts</Nav.Link>
                  </Nav>
                  
                </Offcanvas.Body>
                
              </Navbar.Offcanvas>
              
                      <Dropdown align="end" className='logCol'>
                        <Dropdown.Toggle id="dropdown-basic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#">Settings</Dropdown.Item>
                          <Dropdown.Item href="#">Profile</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item href="#">Log out</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    
                  </div>
            </Container>
          </Navbar>
        ))}
      </>
    )
  }
}
