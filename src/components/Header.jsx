import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import adsc from '../images/atharva2.png';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

export default class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOffcanvas: false
    };
  }

  handleToggleOffcanvas = () => {
    this.setState({ showOffcanvas: !this.state.showOffcanvas });
  }

  handleCloseOffcanvas = () => {
    this.setState({ showOffcanvas: false });
  }

  render() {
    return (
      <>
        {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-dark" style={{ height: '10vh', paddingBottom: '0px', paddingTop: '0px', margin: '0px', position: 'fixed', width: '100%', zIndex: '1000' }}>
            <Container fluid>
              <Link to='/'>
                <Navbar.Brand href="#">
                  <img
                    src={adsc}
                    alt=""
                    className="img-fluid"
                    style={{ maxHeight: '50px', marginRight: '10px' }}
                  />
                </Navbar.Brand>
              </Link>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ backgroundColor: '#EF8535' }} onClick={this.handleToggleOffcanvas} />
                <Navbar.Offcanvas
                  show={this.state.showOffcanvas}
                  onHide={this.handleCloseOffcanvas}
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton className='bg-dark' style={{ color: 'white' }}>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Menu</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className='bg-dark'>
                    <Nav className="justify-content-end flex-grow-1 pe-3 bg-dark" placement="end">
                      <div className="menit">
                        <Link to="/about" style={{ textDecoration: 'none' }} onClick={this.handleCloseOffcanvas}>
                          <Nav.Link href="#about" style={{ color: 'white' }}>About</Nav.Link>
                        </Link>
                      </div>
                      <div className="menit">
                        <Link to="/events" style={{ textDecoration: 'none' }} onClick={this.handleCloseOffcanvas}>
                          <Nav.Link href="#events" style={{ color: 'white' }}>Events</Nav.Link>
                        </Link>
                      </div>
                      <div className="menit">
                        <Link to="/contact" style={{ textDecoration: 'none' }} onClick={this.handleCloseOffcanvas}>
                          <Nav.Link href="#contact" style={{ color: 'white' }}>Contacts</Nav.Link>
                        </Link>
                      </div>
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
