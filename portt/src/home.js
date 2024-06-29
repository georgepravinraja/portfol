import React from "react";
import './home.css'; 
import { Col, Row, Button } from "react-bootstrap";

export default function Home() {
    return (
        <div className="hom">
            <Row>
                <Col lg={6}>
                    <div className="home">
                        <h1 style={{color:'black'}}>Hello,<span style={{color:'blue'}}> I am GEORGE</span></h1>
                        <h2 style={{color:'black'}}>I'm a Web Designer and Developer</h2>
                        <p style={{color:'wheat', marginTop:'30px'}}>
                            I'm an Aspiring Full Stack Web Developer with a passion for creating beautiful and functional websites. As I start my career, I am excited to focus on front-end development and bring creative designs to life.
                        </p>
                        <div className="bout">
                        <Button 
                            href="/geor.pdf" 
                            download="my resume" 
                            style={{marginTop:'80px', backgroundColor:'red', padding:'18px', borderColor:'black'}}
                        >
                            Download CV
                        </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
