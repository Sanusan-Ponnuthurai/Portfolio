import React from 'react';
import './Header.css';
import Cta from './CTA';
import ME from '../../assets/Saanu1.jpg'
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sanusan Ponnuthurai</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <Cta />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;