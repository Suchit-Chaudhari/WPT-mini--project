import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const PropertyDetails = () => {
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  const fetchProperties = async () => {
    try {
      const response = await axios.get(`http://localhost:6800/property/${id}`);
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
      console.log(response.data[0]);
      setProperty(response.data[0]);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <Container className='my-5'>
      <Card>
        <Row>
          <Col md={6}>
            <Image src={property.url} alt="Property Image" fluid />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{property.Type}</Card.Title>
              <Card.Text>Price: {property.Price}</Card.Text>
              <Card.Text>Location: {property.Location}</Card.Text>
              <Card.Text>Status: {property.Status}</Card.Text>
              <Card.Text>Contact Agent: {property.agent_contact}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default PropertyDetails;
