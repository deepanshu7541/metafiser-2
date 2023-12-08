import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-contact">
            <span className="footer-text">{props.text1}</span>
            <a
              href="mailto:use@active-app.com?subject=Support"
              className="footer-link"
            >
              {props.text2}
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-category">
            <span className="footer-text01">{props.text3}</span>
            <div className="footer-links">
              <span className="footer-text02">{props.text5}</span>
              <span className="footer-text03">{props.text6}</span>
              <span className="footer-text04">{props.text7}</span>
              <span className="footer-text05">{props.text8}</span>
              <span className="footer-text06">{props.text9}</span>
              <span className="footer-text07">{props.text10}</span>
              <span className="footer-text08">{props.text11}</span>
              <span className="footer-text09">{props.text12}</span>
              <span className="footer-text10">{props.text13}</span>
            </div>
          </div>
          <div className="footer-category1">
            <span className="footer-text11">{props.text4}</span>
            <div className="footer-links1">
              <span className="footer-text12">{props.text14}</span>
              <span className="footer-text13">{props.text15}</span>
              <span className="footer-text14">{props.text16}</span>
              <span className="footer-text15">{props.text17}</span>
            </div>
          </div>
          <div className="footer-category2">
            <span className="footer-text16">
              <span className="">Industries</span>
              <br className=""></br>
            </span>
            <div className="footer-links2">
              <span className="footer-text19">{props.text18}</span>
              <span className="footer-text20">{props.text19}</span>
              <span className="footer-text21">{props.text20}</span>
              <span className="footer-text22">{props.text21}</span>
              <span className="footer-text23">{props.text22}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <img
            alt={props.pastedImageAlt}
            src={props.pastedImageSrc}
            className="footer-pasted-image"
          />
        </div>
        <span className="footer-text24">{props.text}</span>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text10: 'Agile implementation',
  text4: 'Company',
  text20: 'Retail & E-commerce',
  text6: 'Digital Transformation',
  text11: 'Data Engineering and Alanaytics',
  text17: 'Partners',
  text21: 'Entertainment',
  text12: 'Web Development and Mobile app',
  pastedImageAlt: 'pastedImage',
  text18: 'FinTech',
  text9: 'Full stack solutions',
  text3: 'Services',
  text5: 'Cyber Security',
  text13: 'IOT',
  text14: 'Who we are',
  text2: 'connect@metafiser.tech',
  text1: 'Contact',
  rootClassName: '',
  pastedImageSrc: '/external/pastedimage-reze-200h.png',
  text16: 'Message from our CEO',
  text19: 'Advertising',
  text15: 'Mission & Vission',
  text: 'Copyright © Metafiser - 2023',
  text8: 'AI & ML',
  text7: 'DevOps Transformation',
  text22: 'Healthcare',
}

Footer.propTypes = {
  text10: PropTypes.string,
  text4: PropTypes.string,
  text20: PropTypes.string,
  text6: PropTypes.string,
  text11: PropTypes.string,
  text17: PropTypes.string,
  text21: PropTypes.string,
  text12: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  text18: PropTypes.string,
  text9: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  text16: PropTypes.string,
  text19: PropTypes.string,
  text15: PropTypes.string,
  text: PropTypes.string,
  text8: PropTypes.string,
  text7: PropTypes.string,
  text22: PropTypes.string,
}

export default Footer
