import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import RootBridge from "../Assets/rootbridge.jpg"
import UmaimLake from "../Assets/UmaimLake.jpg"
import KrangSuri from "../Assets/KrangSuri.jpg"

import RootBridgeM from "../Assets/rootbridgeM.jpeg"
import UmaimLakeM from "../Assets/UmaimLakeM.jpg"
import KrangSuriM from "../Assets/KrangSuriM.jpeg"

import css from "../styles/index.module.css"

export default function Hero() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect} data-interval="1000" fade className={css.Desktop}>
      <Carousel.Item interval={2000} className="hero" >
        <img
          className="d-block w-100"
          src={RootBridge}
          alt="First slide"
        />
        <Carousel.Caption >
          <h1>The Ever Growing Living Root Bridge</h1>
          <h3>East Khasi Hills</h3>
        </Carousel.Caption>
      </Carousel.Item >

      <Carousel.Item interval={2000} className="hero">
        <img
          className="d-block w-100"
          src={UmaimLake}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1>Umiam Lake</h1>
          <h3>East Khasi Hills</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000} className="hero">
        <img
          className="d-block w-100"
          src={KrangSuri}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1>Krang Suri</h1>
          <h3>Jaintia Hills</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

{/* Mobile */}
<Carousel activeIndex={index} onSelect={handleSelect} data-interval="1000" fade className={css.Mobile}>
<Carousel.Item interval={2000} className="hero" >
  <img
    className="d-block w-100"
    src={RootBridgeM}
    alt="First slide"
  />
  <Carousel.Caption >
    <h1>The Ever Growing Living Root Bridge</h1>
    <h3>East Khasi Hills</h3>
  </Carousel.Caption>
</Carousel.Item >

<Carousel.Item interval={2000} className="hero">
  <img
    className="d-block w-100"
    src={UmaimLakeM}
    alt="Second slide"
  />

  <Carousel.Caption>
  <h1>Umiam Lake</h1>
    <h3>East Khasi Hills</h3>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item interval={2000} className="hero">
  <img
    className="d-block w-100"
    src={KrangSuriM}
    alt="Third slide"
  />

  <Carousel.Caption>
  <h1>Krang Suri</h1>
    <h3>Jaintia Hills</h3>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
  );
}