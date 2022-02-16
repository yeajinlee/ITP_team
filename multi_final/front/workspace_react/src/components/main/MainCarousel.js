import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner2 from '../image/banner2.jpg';
import './css/MainImage.scss';

const MainCarousel = () => {
    return (
        <div class='cardImage'>
<Carousel fade>
  <Carousel.Item>
    <img
      width="50%"
      src={banner2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.vlpt.us/images/hyuri/post/304960c9-ed7a-44a2-a99d-98963241dfa7/react-logo.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
<<<<<<< HEAD
      className="d-block w-50"
      src="https://media.vlpt.us/images/hyuri/post/9ccf76d0-7c49-4dd2-877d-2937347878a1/Java.jpg"
=======
      className="d-block w-100"
      src={banner3}
>>>>>>> 31d69e35a49bc32aceb9bba746a5c6245cc85fd2
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};
export default MainCarousel;