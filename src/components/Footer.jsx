import React from 'react';
import css from '../styles/Footer.module.css';
import { UilFacebook, UilGithub, UilInstagram } from '@iconscout/react-unicons';
import Logo from "../Assets/Logo1.png";
import {Link} from 'react-router-dom'
export default function Footer (){
  return(
    <div className={css.container}>
      <span>Designed & Developed by Niraj</span>
      <div className={css.social}>
        <a href="https://www.facebook.com/"><a target="_blank"><UilFacebook size={30}  color="#FF671F"/></a></a>
        <a href="https://github.com/NirajKrTiwari"><a target="_blank"><UilGithub size={30} color="#06038D"/></a></a>
        <a href="https://www.instagram.com/"><a target="_blank"><UilInstagram size={30} color="#046A38" /></a></a>
      </div>
      <Link to="/">
        <div className={css.logo}>
          <img src={Logo} alt="Img Loading..." onerror="this.src='alt.png';"  width={110} height={60} />
        </div>
      </Link>

    </div>
  )
}
