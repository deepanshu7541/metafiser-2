import React from 'react'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Active Online Software Page</title>
        <meta
          property="og:title"
          content="About - Active Online Software Page"
        />
      </Helmet>
      <nav className="about-centered">
        <div className="about-left">
          <div className="about-container1">
            <img
              alt="pastedImage"
              src="/external/pastedimage-tur-200h.png"
              className="about-pasted-image"
            />
          </div>
        </div>
        <a
          href="https://#"
          target="_blank"
          rel="noreferrer noopener"
          className="about-link Link"
        >
          Metafiser
        </a>
        <div className="about-links">
          <a
            href="https://acods.co.uk"
            target="_blank"
            rel="noreferrer noopener"
            className="about-link1 Link"
          >
            Learn
          </a>
          <a
            href="https://replit.com/site/ide"
            target="_blank"
            rel="noreferrer noopener"
            className="about-link2 Link"
          >
            <span>Practice</span>
            <br></br>
          </a>
          <span className="Link">
            <span>Compete</span>
            <br></br>
          </span>
          <span className="Link">
            <span>About</span>
            <br></br>
          </span>
        </div>
        <div className="about-right">
          <span className="about-sign-in Link">Sign in</span>
          <div className="about-get-started">
            <span className="about-text08">
              <span>Register</span>
              <br></br>
            </span>
          </div>
          <div id="open-mobile-menu" className="about-burger-menu">
            <img
              alt="pastedImage"
              src="/pastedimage-yxbd.svg"
              className="about-mobile-menu-button"
            />
          </div>
        </div>
      </nav>
      <div className="about-container2">
        <h1 className="about-text11">ABOUT US</h1>
      </div>
      <div className="about-container3">
        <h1 className="about-text12">
          <br></br>
          <span>--- ABOUT US</span>
        </h1>
        <h1 className="about-text15">Who Are We?</h1>
        <div className="about-container4">
          <span className="about-text16">
            Welcome to Fast Lane – the global center for IT training in Data
            Science &amp; Machine Learning.Our mission is to make IT training an
            innovative and exciting experience for students and working
            professionals.Imparting IT training for 11 years and continued, our
            alumni work with the world’s leading technologically advanced
            companies like Microsoft, Google, Amazon, Cisco &amp; many others.We
            are partners with more than 150+ Corporates and recruitment
            consultants worldwide.ext
          </span>
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="about-image"
          />
        </div>
        <div className="about-container5"></div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default About
