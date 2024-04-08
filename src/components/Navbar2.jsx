import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import adsc from '../images/atharva2.png';

function Navbar2({ toggleDashboard, handleLogout }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleToggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <div>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark" style={{ height: '10vh', paddingBottom: '0px', paddingTop: '0px', margin: '0px', position: 'fixed', width: '100%', zIndex: '1000' }}>
          <Container fluid style={{ padding: 0, margin: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                className='navbar-brand bg-dark'
                onClick={toggleDashboard}
                role="button"
                tabIndex={0}
                style={{ color: 'white', marginLeft: '0px', border: 'none', marginRight:'10px', fontSize:'20px'}}
              >
                Dashboard
              </Button>
              <Link to='/'>
                <Navbar.Brand href="#">
                  <img
                    src={adsc}
                    alt=""
                    className="img-fluid"
                    style={{ maxHeight: '50px' }}
                  />
                </Navbar.Brand>
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ backgroundColor: '#EF8535' }} onClick={handleToggleOffcanvas} />
              <Navbar.Offcanvas
                show={showOffcanvas}
                onHide={handleCloseOffcanvas}
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 bg-dark" placement="end">
                    <Link to="/about" style={{ textDecoration: 'none' }} onClick={handleCloseOffcanvas}>
                      <Nav.Link href="#about" style={{ color: 'white' }}>About</Nav.Link>
                    </Link>
                    <Link to="/events" style={{ textDecoration: 'none' }} onClick={handleCloseOffcanvas}>
                      <Nav.Link href="#events" style={{ color: 'white' }}>Events</Nav.Link>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }} onClick={handleCloseOffcanvas}>
                      <Nav.Link href="#contact" style={{ color: 'white' }}>Contacts</Nav.Link>
                    </Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <Dropdown align="end" className="logCol">
                <Dropdown.Toggle id="dropdown-basic" style={{ color: 'white', backgroundColor: 'EF8535', border: 'none' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Settings</Dropdown.Item>
                  <Dropdown.Item href="#">Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Navbar2;
