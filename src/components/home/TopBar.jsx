import React from "react";

const TopBar = () => {
  return (
    <div className="top-bar">
      <section className="flex flex-row flex-space-between flex-align-center">
        <div className="emails">
          <a className="email" href="mailto:test@domain.com">
            test@domain.com
          </a>
          <a className="email" href="mailto:test@domain.com">
            test@domain.com
          </a>
        </div>
        <div className="top-nav">
          <ul className="flex flex-row flex-space-between flex-align-center">
            <li className="menu-item">
              <a href="#">
                <i className="fa fa-user"></i>My Profile
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <i className="fa fa-heart"></i>Favourites
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default TopBar;
