import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap';

const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\一-龥\s]/g;
const titleUrl = (title) => {
  return title.replace(reg,"-");
};

const MainCarousel = () => {
    return (
      <div
        style={{
          justifyContent: 'center',
          margin: '0 auto',
          alignContent: 'center',
          display: 'block',
          width: 1024,
          paddingTop: 30,
          paddingBottom: 20,
        }}
        id="cardImage"
        className="carousel"
      >
        <Carousel fade>
          <Carousel.Item>
            <img
            className="d-flex"
            src='./assets/banner1_7.png'
            alt="Second slide"
            width={1024}
            height={300}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-flex"
            src='./assets/banner1_6.png'
            alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
};
export default MainCarousel;