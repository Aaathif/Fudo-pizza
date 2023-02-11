import React from 'react'
import css from '../styles/Footer.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import {UilFacebook} from '@iconscout/react-unicons'
import {UilGithub} from '@iconscout/react-unicons'
import {UilInstagram} from '@iconscout/react-unicons'

export default function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
          <span><UilFacebook size={45}/></span>
          <span><UilGithub size={45}/></span>
          <span><UilInstagram size={45}/></span>
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50}/>
        <span>Fudo</span>
      </div>
    </div>
  )
}
