import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Row, Col } from 'react-bootstrap';
import Carousel1 from './Carousel1';
import '../App.css'
import praesto from '../images/praesto.png'
import Cards from './Cards';

export default class Events extends Component {
  componentDidMount() {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <div id='m_heading' style={{}}>
          <p>Our Events & Programs</p>
        </div>
        <div style={{ paddingLeft: '20px', paddingRight: '20px', }}>
          <Row className="featurette">
            <Col md={7} className='second' style={{ paddingTop: '5%',  }}>
              <h1 className="featurette-heading fw-normal lh-1" style={{color:'white'}} >
                Our Biggest Event Praesto
              </h1>
              <p className="lead" style={{color:'white'}}>
                A forthcoming event being put on by Malla Reddy Engineering College's Atharva Data Science Community. The purpose of Praesto 2k24 is to bring together academics, business professionals, and students to talk about the most recent technological developments. We anticipate a sizable turnout of attendees from across the region who are eager to hear about the newest trends and technological breakthroughs.
              </p>
            </Col>
            <Col md={5}>
              <img src={praesto} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="Praesto Image" />
            </Col>
          </Row>
        </div>
        <Carousel1 />
        <br />
        <h1 style={{fontSize:'55px', textAlign:'center', color:'#EF8535'}}>Our Events</h1>
        <br />
        <Cards />

        <br />
      </div>
    );
  }
}
