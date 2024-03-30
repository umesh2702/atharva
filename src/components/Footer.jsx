import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaPhoneAlt,FaDiscord } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import adsc from '../images/atharva2.png';
import { Link } from "react-router-dom";


const ThreeEqualBoxes = () => {
  return (
    <div className="bg-dark" >
    <Container className="bg-dark py-4 "   >
      <div style={{textAlign:'center'}}>
    <img
                  src={adsc}
                  alt=""
                  className="img-fluid"
                  style={{ maxHeight: '70px', marginRight: '10px', maxWidth:'120px',  }}
                />
      </div>
      <Row>
        {/* Box 1 */}
        
        <Col md={4} className="">
          <div className="h-80 rounded-lg d-flex flex-column justify-content-center align-items-center text-center ">
            <h2
              className="text-2xl font-bold"
              style={{
                fontFamily: "'MuseoModerno', sans-serif",
                color: "rgb(134, 114, 243)",  
              }}
            >
             
            </h2>
            <ul style={{ color: 'white', textDecoration: 'none', padding: '0', margin: '0' , fontSize:'45', marginTop:'12%'}}>

  <Link style={{ color: 'white', textDecoration: 'none',  fontSize:'18px' }} to='/'><li>Home</li></Link >        
  <Link style={{ color: 'white', textDecoration: 'none',fontSize:'18px' }} to='/events'><li>Events</li></Link>            
  <Link style={{ color: 'white', textDecoration: 'none',fontSize:'18px' }} to='/about'><li>About</li></Link>              
</ul>

          </div>
        </Col>

        {/* Box 2 */}
        <Col md={4} className="">
          <div className="pt-5 h-80 rounded-lg d-flex flex-column justify-content-center align-items-center text-center" style={{paddingTop:'0'}}>
            <div className="d-flex align-items-center">
              <BiLogoGmail style={{ fontSize: "1.75rem", color: "rgb(134, 114, 243)" }} />
              <p className="text-lg mt-3" style={{color:'white'}}>info@Atharva.com</p>
            </div>
            <div className="d-flex mt-2">
              <FaPhoneAlt style={{ fontSize: "1.5rem", color: "rgb(134, 114, 243)" }} />
              <p className="text-lg"  style={{color:'white'}}>+91 6281294047</p>
            </div>
          </div>
        </Col>

        {/* Box 3 */}
        <Col md={4} className="">
          <div className="pt-5 h-80 rounded-lg d-flex flex-column justify-content-center align-items-center text-center" style={{padding:'0',}}>
            <h2 className="text-2xl font-semibold"  style={{color:'white'}}>Follow Us</h2>
            <div className="d-flex mt-2" style={{ gap:'10px'}}>
              <a href="https://www.linkedin.com/company/atharva-data-science-community/" className="mr-2" target="_blank">
                <FaLinkedin style={{ fontSize: "2.25rem", color: "rgb(134, 114, 243)" }} />
              </a>
              <a href="https://www.instagram.com/atharvadsc" className="mr-2" target="_blank">
                <FaInstagram style={{ fontSize: "2.25rem", color: "rgb(134, 114, 243)" }} />
              </a>
              <a href="https://github.com/ATHARVADSCOMMUNITY" className="mr-2" target="_blank">
                <FaDiscord style={{ fontSize: "2.25rem", color: "rgb(134, 114, 243)" }} />
              </a>
            </div>
          </div>
        </Col>
      </Row>

      {/* Copyright */}
      <Row className="text-center">
        <Col>
          <p className="text-600 text-lg" style={{color:'white'}}>
            &copy; {new Date().getFullYear()} Atharva. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ThreeEqualBoxes;
