import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardGroup} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/carousel.jpg'
import image2 from '../images/card.jpg'



export default class Events extends Component {
  render() {
    
    return (
      <>
      
      <div id='m_heading'>
        <p>Our Events & Programs</p>
      </div>
      
      <Container>
        <div>
      <Row className="featurette">
        <Col md={7} className='second'>
          <h1 className="featurette-heading fw-normal lh-1">
            Our Biggest Event Presto 
          </h1>
          <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias autem dolorum blanditiis deleniti cumque iusto aspernatur quos omnis nemo, temporibus tempore. Sit quibusdam voluptates sapiente id neque cum consequatur?</p>
        </Col>
        <Col md={5}>
          <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
          </svg>
        </Col>
      </Row>
      </div>
    </Container>

    <div>
    <Carousel id='carousel_p'>
      <Carousel.Item  interval={1000}>
      <img src={image1} alt="First slide" height={400} width={400} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={1000}>
      <img src={image1} alt="Second slide" height={400} width={400}/>
        <Carousel.Caption >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={image1} alt="Third slide" height={400} width={400}/>
        <Carousel.Caption >
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, sceler consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>



<div id='upComingEvent'>
  <Container>
  <CardGroup>
      <Card className='cards'>
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='cards'>
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

  </Container>
</div>



      </>
    )
  }
}
