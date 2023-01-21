import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello! I'm</h5>
        <h1> Meng Yew/Michael</h1>
        <h5 className='text-light'>Interested in Data Science, Engineering, and making stuff</h5>
        <CTA />
        <HeaderSocial />

        <a href="#contact" className='scroll_down'>Find out more</a>
      </div>
    </header>
  )
}

export default Header