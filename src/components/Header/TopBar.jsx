import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { useEffect } from "react";

const TopBar = () => {
  // console.log(store.getState().cart);
  const myCart = useSelector((state) => state.cart);
  let totalQty = myCart.cartTotalQuantity;

  return (
    <div className="top-bar">
      <section className="flex flex-row flex-space-between flex-align-center">
        <div className="emails">
          <a className="email" href="mailto:test@domain.com">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />
            test@domain.com
          </a>
          <a className="email" href="mailto:test@domain.com">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />
            test@domain.com
          </a>
        </div>
        <div className="top-nav">
          <ul className="flex flex-row flex-space-between flex-align-center">
            <li className="menu-item">
              <a href="#">
                <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
                My Profile
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ marginRight: "5px" }}
                />
                Favourites
              </a>
            </li>
            <li className="menu-item" style={{ position: "relative" }}>
              <Link to={"/cart"}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ marginRight: "5px" }}
                />
                <span className="qty-badge">{totalQty}</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default TopBar;
