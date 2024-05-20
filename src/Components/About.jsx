import { Container, Card, Row, Col } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import shraddha from '../assets/images/shraddha-rathi.jpg'
import Abhishek from '../assets/images/Abhishek Gawand.jpg'
import Suchit from '../assets/images/Suchit Chaudhari.jpg'
  const About = () => {
    return (
        <Container>
            <h2>About Us</h2><br></br><br></br>
            <Row>
                <Col md={4}>
                    <Card className="mb-4" style={{ height: '370px', width: '250px' }}>
                        <Card.Img style={{ height: '290px', width: '250px' }} variant="top" src={Suchit}/>
                        <Card.Body>
                            <Card.Title>Suchit Chaudhari</Card.Title>
                            
                            <Card.Text>
                                Co-partner
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                <Card className="mb-4" style={{ height: '370px', width: '250px' }}>
                        <Card.Img style={{ height: '290px', width: '250px' }} variant="top" src={Abhishek} />
                        <Card.Body>
                            <Card.Title>Abhishek Gawand</Card.Title>
                            <Card.Text>
                                Co-partner
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                <Card className="mb-4" style={{ height: '370px', width: '250px' }}>
                        <Card.Img style={{ height: '290px', width: '250px' }} variant="top" src={shraddha} />
                        <Card.Body>
                            <Card.Title>Shraddha Rathi</Card.Title>
                            <Card.Text>
                                Co-partner
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row><br></br><br></br><br></br>
            <h2>Our Company</h2><br></br>
            <p>
                Founded in 2010 and headquartered in Mumbai - 400 051, Star Real Estate Pvt Ltd has emerged as a distinguished leader in the realm of Commercial and Residential Property Management, Facility, and Commercial Brokerage Services. With a robust clientele encompassing private investors, institutions, corporations, not-for-profits, home owner associations, and cooperatives, we pride ourselves on our closely held Corporation structure, driven by shareholder ownership and operations.</p>

            <p>With a dedicated team of over 200 professionals, our reach extends across dynamic markets such as Mumbai, Pune, and Nashik. Our success story is underscored by our integrated, team-based approach, fostering seamless communication and collaboration to ensure the operational and financial excellence of every property under our management.

                At Star Real Estate Pvt Ltd, client satisfaction reigns supreme, underpinned by our proactive strategies aimed at delivering unparalleled service and performance in the real estate industry. Our commitment to excellence continues to propel us forward as a trusted partner in the ever-evolving landscape of property management and brokerage services.
            </p><br></br><br></br><br></br>
            <h2 style={{ float: 'left' }}>Our Vision</h2><br></br><br />

            <ul > 
                <li>To lead with excellence in property management, prioritizing client satisfaction.</li>
                <li>To innovate and set new industry standards through pioneering approaches.</li>
                <li>To foster thriving, sustainable communities with our holistic management style.</li>
                <li>To leverage cutting-edge technology for enhanced efficiency and effectiveness.</li>
                <li>To empower our team through a culture of collaboration and growth.</li>
            </ul><br></br><br></br><br></br><br></br>
            <h2>Our Missions</h2><br></br>
            <ListGroup>
                <li>Empowering individuals and businesses through tailored property management solutions.</li>
                <li>Upholding excellence in every transaction, delivering seamless processes and exceptional outcomes.</li>
                <li>Crafting community-centric solutions for vibrant, sustainable neighborhoods.</li>
                <li>Driving innovation to anticipate and address future real estate challenges.</li>
                <li>Integrating sustainability into property management practices for a greener future.</li>

            </ListGroup>


        </Container>

    );
}

export default About;