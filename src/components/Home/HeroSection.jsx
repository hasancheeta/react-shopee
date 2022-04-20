import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <section className="flex flex-row flex-space-between">
        <div className="col1">
          <h1 className="h-lg h-pink">the home of promotional products</h1>
          <p>
            If you're looking to buy promotional products that are of
            exceptional quality, Bulk Branded is the place to shop. We're among
            the UK's leading suppliers of personalised corporate gifts perfect
            for businesses and freelance individuals alike. Whether you want
            promotional pens to hand out at a conference or any other product to
            represent your business, Bulk Branded is your go-to choice of
            supplier.
          </p>
          <div className="rating2 flex flex-row flex-justify-start">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className="col2">
          <img src="/images/header-element-pens.png" />
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
