import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
    const [property, setProperty ] = useState();
    const {id} = useParams();
    
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
        console.log(id);
        
      }, []);
  return (
    <div>
      Propertydetails
      {console.log(property)}
    </div>
  )
}

export default PropertyDetails
