
import React from 'react';
import './portfolio.css';
import { Container,Row,Col } from 'react-bootstrap';

const Card = ({ title, content }) => {
  return (
    <div className='boody'>
    <Container>
        <Row>
            <Col lg={6}>
    <div className="card">
      <h3>MOVIE-TICKET</h3>
      <img src="ct.png" alt="ct" className="img-fluid" />
      <a href="https://cinema-4pvq.vercel.app/" target="_blank" rel="cinema">
        MOVIE-TICKET-visit....
      </a>      
    </div>
    </Col>
    <Col lg={6}>
    <div className="card">
      <h3>WILLOW LANE</h3>
      <img src="wl.png" alt="wl" className="img-fluid" />
      <a href="https://willolanegeo.vercel.app/" target="_blank" rel="willowlane">
        WILLOW-LANE-visit....
      </a>      
    </div>
    </Col>
    </Row>
    </Container>
    </div>
  );
};

export default Card;
