import React, { } from 'react'
import {Carousel} from 'react-bootstrap'

const CarouselHero = () => {


    return (
        <div>
     <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2018/07/31/14/09/hot-3575167_1280.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3> */}
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/joyful-young-man-father-lifting-excited-happy-little-son-picture-id1206859193?b=1&k=6&m=1206859193&s=170667a&w=0&h=-8NzX8jA8iZFm7ijNYCkzLqSj97qoWBoUmx1NKOnpXY="
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3> */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/happy-young-family-relax-on-wooden-floor-at-home-picture-id1253390183?b=1&k=6&m=1253390183&s=170667a&w=0&h=s4mf03yBx9Ly0vYtaSKgvvro17okdiYGDY4JYNUFuXA="
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3> */}
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default CarouselHero
