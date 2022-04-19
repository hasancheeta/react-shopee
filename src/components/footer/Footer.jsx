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
      <section class="flex flex-row flex-space-around flex-align-start">
        <div class="logo">
          <a href="#">
            <img src="/images/logo-secondary.png" />
          </a>
        </div>
        <div class="f-menu flex flex-column flex-align-center">
          <h3 class="footer-heading">Heading</h3>
          <ul class="footer-menu flex flex-column">
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
          </ul>
        </div>
        <div class="f-menu flex flex-column flex-align-center">
          <h3 class="footer-heading">Heading</h3>
          <ul class="footer-menu flex flex-column">
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
          </ul>
        </div>
        <div class="f-menu flex flex-column flex-align-center">
          <h3 class="footer-heading">Heading</h3>
          <ul class="footer-menu flex flex-column">
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
          </ul>
        </div>
        <div class="f-menu flex flex-column flex-align-center">
          <h3 class="footer-heading">Heading</h3>
          <ul class="footer-menu flex flex-column">
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
            <li class="menu-item">
              <a href="#">my gallery</a>
            </li>
          </ul>
        </div>
      </section>
      <div class="footer-bottom-bar fw flex flex-row flex-align-center flex-justify-center">
        <section class="flex flex-row flex-align-center flex-justify-center">
          <div class="footer-bar-inner flex flex-row flex-space-between">
            <div class="privacy-links flex flex-row">
              <a href="#">privacy policy</a>
              <a href="#">terms & conditions</a>
            </div>
            <div class="social-icons flex flex-row">
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
