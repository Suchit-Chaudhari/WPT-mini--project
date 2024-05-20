import React from 'react';
import '../css/PCard.css';
import {Link} from 'react-router-dom'
const PCard = ({ property }) => {
  return (
    <div className="property-card">
      <Link to={`/properties/${property.No}`} className="card-link">
      <div className="card-image">
        <img src={property.url} alt="Property" />
      </div>
      <div className="card-details">
        <h2>{property.Type}</h2>
        <p><strong>Price:</strong> ${property.Price}</p>
        <p><strong>Location:</strong> {property.Location}</p>
        <p><strong>Contact:</strong> {property.agent_contact}</p>
      </div>

      </Link>
    </div>
  );
};

export default PCard;
