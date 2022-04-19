import React from "react";

const LowerBar = () => {
  return (
    <div className="lower-bar flex flex-row  flex-align-center">
      <section className="flex flex-row flex-space-between flex-align-center">
        <div className="search">
          <i className="fa fa-search"></i>
          <input type="search" className="search-bar" placeholder="search" />
        </div>
        <div className="lower-nav">
          <ul className="flex flex-row flex-space-around">
            <li className="menu-item">
              <a href="#">PENS & WRITING</a>
            </li>
            <li className="menu-item">
              <a href="#">MUGS & BOTTLES</a>
            </li>
            <li className="menu-item">
              <a href="#">BAGS</a>
            </li>
            <li className="menu-item">
              <a href="#">clothing</a>
            </li>
            <li className="menu-item">
              <a href="#">paper and pads</a>
            </li>
            <li className="menu-item">
              <a href="#">more</a>
            </li>
          </ul>
        </div>
        <div className="rating flex flex-row flex-justify-end">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
      </section>
    </div>
  );
};
export default LowerBar;
