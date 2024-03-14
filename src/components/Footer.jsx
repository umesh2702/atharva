import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {  Linkedin, Instagram, EnvelopeFill } from 'react-icons/io5';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";




const Footer = () => {
  return (
    <footer className="py-3 my-4">
      <Container>
        <p className="footer_st">Follow us on</p>
        <Row className="justify-content-center border-bottom pb-3 mb-3">
          <Col className="ms-3">
            <a className="link-body-emphasis" href="#">
              <FaGithub size={27} />
            </a>
          </Col>
          <Col className="ms-3">
            <a className="link-body-emphasis" href="#">
              <FaLinkedin size={25} />
            </a>
          </Col>
          <Col className="ms-3">
            <a className="link-body-emphasis" href="#">
              <FaInstagram size={25} />
            </a>
          </Col>
          <Col className="ms-3">
            <a className="link-body-emphasis" href="#">
              <IoIosMail size={27} />
            </a>
          </Col>
        </Row>
        <p className="text-center text-body-dark">
          All rights reserved by <em>Atharva</em>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
