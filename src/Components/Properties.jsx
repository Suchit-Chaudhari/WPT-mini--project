import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import PCard from './PCard';

export function Property() {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('http://localhost:6800/property/');
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
      console.log(response.data.result);
      setProperties(response.data.result);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <Container>
      <br /><br />
      {properties.length > 0 ? (
        properties.map((property, index) => (
          index % 3 === 0 ? (
            <Row key={index}>
              <Col>
                <PCard property={properties[index]} />
              </Col>
              {index + 1 < properties.length && (
                <Col>
                  <PCard property={properties[index + 1]} />
                </Col>
              )}
              {index + 2 < properties.length && (
                <Col>
                  <PCard property={properties[index + 2]} />
                </Col>
              )}
            </Row>
          ) : null
        ))
      ) : (
        <p>No properties found.</p>
      )}
    </Container>
  );
}
