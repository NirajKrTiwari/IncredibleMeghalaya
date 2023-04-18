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
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export default function Hero() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])

  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect} data-interval="1000" fade className={css.Desktop}>
      <Carousel.Item interval={2000} className="hero" >
        <Link to="/Info?Mawlynnong">
          <img
          className="d-block w-100"
          src={RootBridge}
          alt="First slide"
        />
        </Link>
        <Carousel.Caption className='mb-3 font-weight-bold'>
          <h1>The Living Root Bridge</h1>
          <h2>East Khasi Hills</h2>
        </Carousel.Caption>
      </Carousel.Item >

      <Carousel.Item interval={2000} className="hero">
      <Link to="/Info?Umiam Lake">
        <img
          className="d-block w-100"
          src={UmaimLake}
          alt="Second slide"
        />
        </Link>
        <Carousel.Caption className='mb-3 font-weight-bold'>
        <h1>Umiam Lake</h1>
          <h2>East Khasi Hills</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000} className="hero">
      <Link to="/Info?Krangshuri Falls">
        <img
          className="d-block w-100"
          src={KrangSuri}
          alt="Third slide"
        />
        </Link>
        <Carousel.Caption className='mb-3 font-weight-bold'>
        <h1>Krangshuri Falls</h1>
          <h2>Jaintia Hills</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

{/* Mobile */}
<Carousel activeIndex={index} onSelect={handleSelect} data-interval="1000" fade className={css.Mobile}>
<Carousel.Item interval={2000} className="hero" >
<Link to="/Info?Mawlynnong">
  <img
    className="d-block w-100"
    src={RootBridgeM}
    alt="First slide"
  />
  </Link>
  <Carousel.Caption >
    <h1>The Living Root Bridge</h1>
    <h3>East Khasi Hills</h3>
  </Carousel.Caption>
</Carousel.Item >

<Carousel.Item interval={2000} className="hero">
<Link to="/Info?Umiam Lake">
  <img
    className="d-block w-100"
    src={UmaimLakeM}
    alt="Second slide"
  />
  </Link>
  <Carousel.Caption>
  <h1>Umiam Lake</h1>
    <h3>East Khasi Hills</h3>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item interval={2000} className="hero">
<Link to="/Info?Krangshuri Falls">
  <img
    className="d-block w-100"
    src={KrangSuriM}
    alt="Third slide"
  />
  </Link>

  <Carousel.Caption>
  <h1>Krang Suri</h1>
    <h3>Jaintia Hills</h3>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
  );
}