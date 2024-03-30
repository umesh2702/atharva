import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import hod from '../images/hod.png';
import prin from '../images/prin.jpg';
import mr from '../images/mr.jpeg';

function Cards2() {
  return (
    <div style={{ margin: "30px", width: '100vw', }}>
      <Container>
        <Row className="justify-content-center">
          <Col md="auto" className="flex-grow-1">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={mr} />
              <Card.Body>
                <Card.Text>
                SRI CH. MALLA REDDY
                <br />
        Founder Chairman, MREC
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto" className="flex-grow-1">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={prin} />
              <Card.Body>
                <Card.Text>
                Dr. A. Ramaswami Reddy
                <br />
Director / Principal MREC (A)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto" className="flex-grow-1">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={hod} />
              <Card.Body>
                <Card.Text>
                Dr. S Shiva Prasad
                <br />
HOD Of Data Science Dept.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards2;
