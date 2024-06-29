import React, { useState } from "react";
import Navbar from "./navbar";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import './contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', formData);
    
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
        <div className="body">
    
            <div>
                <h2 style={{ textAlign: 'center', marginTop: '80px',color:'blue' }}><b>Have You Any Question?</b></h2>
                <Container>
                    <div className="cont">
                        <Row>
                            <Col lg={3}>
                                <h4 style={{ color: 'orange' }}><i className="fa-solid fa-phone"></i></h4>
                                <h4><b>Call Us On!</b></h4>
                                <p><b>+91 6381280047</b></p>
                            </Col>
                            <Col lg={3}>
                                <h4 style={{ color: 'orange' }}><i className="fa-solid fa-envelope"></i></h4>
                                <h4><b>E-mail</b></h4>
                                <p><b>sraja199708@gmail.com</b></p>
                            </Col>
                            <Col lg={3}>
                                <h4 style={{ color: 'orange' }}><i className="fa-solid fa-location-dot"></i></h4>
                                <h4><b>Address</b></h4>
                                <p><b>Chengalpat</b></p>
                            </Col>
                            <Col lg={3}>
                                <h4 style={{ color: 'orange' }}><i className="fa-brands fa-linkedin"></i></h4>
                                <h4><b>LinkedIn</b></h4>
                                <p><b>LinkedIn|Georgepravinraja</b></p>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <h3 style={{ textAlign: 'center', marginTop: '30px' }}><b>SEND ME AN E-MAIL</b></h3>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label><h3><b>Name</b></h3></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label><h3><b>Email</b></h3></Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formSubject">
                                    <Form.Label><h3><b>Subject</b></h3></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Enter subject"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formMessage">
                                    <Form.Label><h3><b>Message</b></h3></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="Enter your message"
                                    />
                                </Form.Group>
                                <Button  variant="primary" type="submit" style={{ marginTop: '10px',marginBottom:'20px' }}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>
        </>
    );
}


