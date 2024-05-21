import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import '../css/CustomCarousel.css'; // Import the CSS file

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <Image src="https://www.bullmenrealty.com/uploads/slider/917godrej-nirvaan-amenities-features261.jpg" fluid className="carousel-image" />
        </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <Image src="https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fluid className="carousel-image" />
        </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <Image src="https://images.unsplash.com/photo-1550136513-548af4445338?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fluid className="carousel-image" />
        </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
