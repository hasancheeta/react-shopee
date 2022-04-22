import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductItem = () => {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src="/images/pen-product.png" className="thumbnail" />
      </div>
      <div className="product-title">
        <p className="title">Product title goes here</p>
      </div>
      <div className="favourite">
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
};
export default ProductItem;
