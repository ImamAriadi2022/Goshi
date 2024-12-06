import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css'; // Optional, for custom styles

function HeroSection() {
  return (
    <div className="hero-section bg-light text-center py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start">
            <h1 className="display-4 fw-bold">Welcome to Goshi</h1>
            <p className="lead">Empowering Digital Entrepreneurs to Shape the Future</p>
            <Button href="#about" variant="primary" className="me-2">Learn More</Button>
            <Button href="#contact" variant="outline-primary">Get Started</Button>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="/path-to-logo/goshi-logo.png" // Update with your local logo path
              alt="Goshi Logo"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
