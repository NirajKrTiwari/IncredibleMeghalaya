import React from 'react';
import css from '../styles/Footer.module.css';
import { UilFacebook, UilGithub, UilInstagram } from '@iconscout/react-unicons';
import Logo from "../Assets/Logo1.png";
export default function Footer (){
  return(
    <div className={css.container}>
      <span>Designed & Developed by Niraj</span>
      <div className={css.social}>
        <a href="https://www.facebook.com/"><a target="_blank"><UilFacebook size={25} /></a></a>
        <a href="https://github.com/NirajKrTiwari"><a target="_blank"><UilGithub size={25} /></a></a>
        <a href="https://www.instagram.com/"><a target="_blank"><UilInstagram size={25} /></a></a>
      </div>
      <a href="/">
        <div className={css.logo}>
          <img src={Logo} alt=""  width={100} height={70} />
          {/* <span>Under Belly</span> */}
        </div>
      </a>

    </div>
  )
}
