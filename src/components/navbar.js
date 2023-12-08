import React from 'react'
import  {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

import './navbar.css'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = (props) => {
  return (
    <nav className="navbar-centered">
      <div className="navbar-left">
        <div className="navbar-container">
          <img
            alt={props.pastedImageAlt}
            src={props.pastedImageSrc}
            className="navbar-pasted-image"
          />
        </div>
      </div>
      <a
        href={props.linkText}
        target="_blank"
        rel="noreferrer noopener"
        className="navbar-link Link"
      >
        {props.text}
      </a>
      <div className="navbar-links">
        <a
          href={props.linkText1}
          target="_blank"
          rel="noreferrer noopener"
          className="navbar-link1 Link"
        >
          {props.text1}
        </a>
        <a
          href={props.linkText2}
          target="_blank"
          rel="noreferrer noopener"
          className="navbar-link2 Link"
        >
          <span>Practice</span>
          <br></br>
        </a>
        <span className="Link">
          <span>Compete</span>
          <br></br>
        </span>
        <span className="Link">
          <Link to="/about">About</Link>
          <br></br>
        </span>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="navbar-sign-in Link">{props.signIn}</Link>
        <Link to="/register" className="navbar-get-started">
          <span className="navbar-text8">{props.text2}</span>
        </Link>
        <div id="open-mobile-menu" className="navbar-burger-menu">
          <img
            alt={props.mobileMenuButtonAlt}
            src={props.mobileMenuButtonSrc}
            className="navbar-mobile-menu-button"
          />
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  mobileMenuButtonSrc: '/pastedimage-yxbd.svg',
  linkText2: 'https://replit.com/site/ide',
  text1: 'Learn',
  linkText: 'https://#',
  mobileMenuButtonAlt: 'pastedImage',
  linkText1: 'https://acods.co.uk',
  signIn: 'Sign in',
  pastedImageAlt: 'pastedImage',
  text2: 'Register',
  text: 'Metafiser',
  pastedImageSrc: '/external/pastedimage-tur-200h.png',
}

Navbar.propTypes = {
  mobileMenuButtonSrc: PropTypes.string,
  linkText2: PropTypes.string,
  text1: PropTypes.string,
  linkText: PropTypes.string,
  mobileMenuButtonAlt: PropTypes.string,
  linkText1: PropTypes.string,
  signIn: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  pastedImageSrc: PropTypes.string,
}

export default Navbar
