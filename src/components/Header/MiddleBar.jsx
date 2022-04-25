import React from "react";
import { Link } from "react-router-dom";

const MiddleBar = () => {
  return (
    <div className="middle-bar">
      <section className="flex flex-row flex-space-between flex-align-center">
        <div className="logo">
          <Link to={"/"}>
            <img src="./images/logo-light.svg" />
          </Link>
        </div>
        <div className="middle-nav">
          <ul className="flex flex-row flex-space-evenly flex-align-center">
            <li className="menu-item">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="menu-item">
              <a href="#">gallery</a>
            </li>
            <li className="menu-item">
              <a href="#">about</a>
            </li>
            <li className="menu-item">
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
        <div className="contact-buttons flex flex-row flex-space-between flex-align-center">
          <div className="call-btn-parent">
            <div className="call-btn-outer">
              <button className="call-btn-inner">call us: 0123456789 </button>
            </div>
          </div>
          <div className="quote-btn-parent">
            <div className="quote-btn-outer">
              <button className="quote-btn-inner">quote </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MiddleBar;
