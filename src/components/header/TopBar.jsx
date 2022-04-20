import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
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
          </ul>
        </div>
      </section>
    </div>
  );
};
export default TopBar;
