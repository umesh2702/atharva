import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Atharva from "../images/atharva2.png";

function Content1() {
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <div className="img-block">
            <img src={Atharva} alt="img" className="img-fluid" />
          </div>
        </Col>
        <Col lg={6}>
          <div className="discr-block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum
            atque soluta tenetur illo labore magni repudiandae quibusdam iste
            iusto assumenda harum odio veritatis dolorem repellendus reiciendis
            numquam, nesciunt esse?
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <div className="discr-block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum
            atque soluta tenetur illo labore magni repudiandae quibusdam iste
            iusto assumenda harum odio veritatis dolorem repellendus reiciendis
            numquam, nesciunt esse?
          </div>
        </Col>
        <Col lg={6}>
          <div className="img-block">
            <img src={Atharva} alt="img" className="img-fluid" />
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <div className="img-block">
            <img src={Atharva} alt="img" className="img-fluid" />
          </div>
        </Col>
        <Col lg={6}>
          <div className="discr-block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum
            atque soluta tenetur illo labore magni repudiandae quibusdam iste
            iusto assumenda harum odio veritatis dolorem repellendus reiciendis
            numquam, nesciunt esse?
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <div className="discr-block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum
            atque soluta tenetur illo labore magni repudiandae quibusdam iste
            iusto assumenda harum odio veritatis dolorem repellendus reiciendis
            numquam, nesciunt esse?
          </div>
        </Col>
        <Col lg={6}>
          <div className="img-block">
            <img src={Atharva} alt="img" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Content1;
