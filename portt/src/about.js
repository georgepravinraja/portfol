import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import './about.css';

export default function About() {
    return (
        <>
            <div className="about">
                <div className="mar">
                    <h2 className="about-heading">I'm George Pravin Raja,</h2>
                    <p className="about-description">
                        <b>I'm a passionate and dedicated Web Developer with a focus on front-end development. With a solid foundation in both front-end and back-end technologies, I enjoy creating visually appealing and user-friendly web applications. In addition to my technical skills, I am dedicated to continuous learning and staying current with industry trends and best practices</b>
                    </p>
                </div>
                <hr style={{color:'blue'}}></hr>
                <div className="car">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <h3 className="section-title">Education</h3>
                                <hr></hr>
                                
                                    
                                                <h4 className="card-subtitle"><mark>Bachelor Of Engineering</mark></h4>
                                                <h4 style={{marginTop:'20px'}} >(MECHANICAL ENGINEERING)</h4>
                                                <h4 style={{marginTop:'20px'}} className="card-subtitle"><mark>Adithya Institute of Technology</mark></h4>
                                                <div className="text">
                                                    <p><b>Coimbatore, Tamilnadu.</b></p>
                                                    <p><b>CGPA: 66.2% (2015-2020)</b></p>
                                                </div>
                                                <h4 className="card-subtitle"><mark>Higher Secondary (HSC)</mark></h4>
                                                <h4 className="card-subtitle" style={{marginTop:'20px'}}><mark>Government Higher Sec School</mark></h4>
                                                <p className="card-text"><b>Percentage: 80%</b></p>
                                         
                                
                            
                    
                                <h3 className="section-title">Experience</h3>
                                <hr></hr>
                               
                                                <h4 className="card-subtitle"><mark>BRASSY ACADEMY AND CONSULTING</mark></h4>
                                                <h5 className="card-subtitle" style={{marginTop:'20px'}}><mark>INTERNSHIP</mark></h5>
                                                <h5 className="card-subtitle"  style={{marginTop:'20px'}}><mark>FULL STACK DEVELOPMENT</mark></h5>
                                                <div className="experience-detail">
                                                    <h6> <mark style={{backgroundColor:'black',color:'white'}}>UI Design:</mark></h6>
                                                    <p className="card-text">
                                                        <b>I built clones of three websites—WillowLane, KodaiAgri.org, and Naturo Product—using HTML, CSS, and Bootstrap. These clones are responsive, thanks to techniques like media queries, flexbox, and grid layouts. I also implemented collapsible navigation bars for better user experience.</b>
                                                    </p>
                                                    <h6 > <mark style={{backgroundColor:'black',color:'white'}}>React UI Design:</mark></h6>
                                                    <p className="card-text">
                                                        <b>Moving forward, I delved into UI design using React.js for my second project. I undertook the challenge of cloning the WillowLane website, leveraging React.js features such as useState and useEffect hooks, along with concepts like routing, props, and components. I deepened my understanding of React.js fundamentals and learned to build dynamic user interfaces efficiently.</b>
                                                    </p>
                                                    <h6> <mark style={{backgroundColor:'black',color:'white'}}>MERN:</mark></h6>
                                                    <p className="card-text">
                                                        <b>I created a dynamic Movie Booking application using the MERN stack (MongoDB, Express.js, React.js, Node.js). Using React.js for the frontend, I included features like movie listings, user authentication, and a shopping cart. On the backend, Node.js and Express.js handled server logic and API requests, while MongoDB stored data. This project not only strengthened my proficiency in MERN stack technologies but also provided valuable insights into building robust and scalable web applications.</b>
                                                    </p>
                                                </div>
                                         
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
        </>
    );
}
