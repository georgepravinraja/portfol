import React from "react";
import Navbar from "./navbar";
import './services.css';
import { Col, Container, Row, Card } from "react-bootstrap";

export default function Services() {
    return (
        <>
            <div className="service">
                <div className="imo">
                <Container>
                    <Row>
                        <Col lg={3} className="coluimg">
                            <img src="hoo.webp" alt="html" className="img-fluid" />
                        </Col>
                        <Col lg={3} className="coluimg">
                            <img src="cs.webp" alt="css" className="img-fluid" />
                        </Col>
                        <Col lg={3} className="coluimg">
                            <img src="bo.svg" alt="bt" className="img-fluid" />
                        </Col>
                        <Col lg={3} className="coluimg">
                            <img src="jjj.webp" alt="jjj" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
                </div>
                <div className="ccc">
                    <Card className="carr">
                        <Card.Body>
                            <Card.Title>
                                <h3 style={{color:'orange'}}><i className="fa-solid fa-laptop"></i></h3>
                                <h2 style={{color:'blue'}}>UI/UX Design</h2>
                                <p style={{color:'red',marginTop:'30px'}}><b>Designing intuitive and engaging user interfaces and experiences.</b></p>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="carr">
                        <Card.Body>
                            <Card.Title>
                                <h3 style={{color:'orange'}}><i className="fa-solid fa-mobile-screen"></i></h3>
                                <h2 style={{color:'blue'}}>Responsive Web Design</h2>
                                <p style={{color:'red',marginTop:'30px'}}><b>Creating websites that look great on any device, from desktops to mobile phones.</b></p>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="carr">
                        <Card.Body>
                            <Card.Title>
                                <h3 style={{color:'orange'}}><i className="fa-brands fa-webflow"></i></h3>
                                <h2 style={{color:'blue'}}>Web Development</h2>
                                <p style={{color:'red',marginTop:'30px'}}><b>Building dynamic websites using modern technologies like MERN Stack.</b></p>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}

