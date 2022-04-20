import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div id="footer">
      <section className="flex flex-row flex-space-around flex-align-start">
        <div className="logo">
          <a href="#">
            <img src="/images/logo-secondary.png" />
          </a>
        </div>
        <div className="f-menu flex flex-column flex-align-center">
          <h3 className="footer-heading">Heading</h3>
          <ul className="footer-menu flex flex-column">
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
          </ul>
        </div>
        <div className="f-menu flex flex-column flex-align-center">
          <h3 className="footer-heading">Heading</h3>
          <ul className="footer-menu flex flex-column">
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
          </ul>
        </div>
        <div className="f-menu flex flex-column flex-align-center">
          <h3 className="footer-heading">Heading</h3>
          <ul className="footer-menu flex flex-column">
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
          </ul>
        </div>
        <div className="f-menu flex flex-column flex-align-center">
          <h3 className="footer-heading">Heading</h3>
          <ul className="footer-menu flex flex-column">
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">my gallery</a>
            </li>
          </ul>
        </div>
      </section>
      <div className="footer-bottom-bar fw flex flex-row flex-align-center flex-justify-center">
        <section className="flex flex-row flex-align-center flex-justify-center">
          <div className="footer-bar-inner flex flex-row flex-space-between">
            <div className="privacy-links flex flex-row">
              <a href="#">privacy policy</a>
              <a href="#">terms & conditions</a>
            </div>
            <div className="social-icons flex flex-row">
              <FontAwesomeIcon className="icon" icon={faTwitter} beatFade />
              <FontAwesomeIcon className="icon" icon={faFacebook} pulse />
              <FontAwesomeIcon className="icon" icon={faInstagram} spin />
              <FontAwesomeIcon className="icon" icon={faYoutube} shake />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Footer;
