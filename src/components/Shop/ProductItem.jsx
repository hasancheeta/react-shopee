import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeart } from "@fortawesome/free-regular-svg-icons";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { AddTocart } from "../../Redux/cartSlice";

const ProductItem = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }
  let limitedTitle = limit(product?.attributes?.Title, 25);
  let formattedTitle = limitedTitle + " ...";

  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src={`http://localhost:1337${product?.attributes?.FeaturedImage?.data[0].attributes?.url}`}
          className="thumbnail"
        />
      </div>
      <div className="product-title flex flex-align-center flex-justify-center">
        <p className="title">{formattedTitle}</p>
      </div>
      <div className="favourite">
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon
          icon={faCartPlus}
          onClick={() => dispatch(AddTocart(product))}
        />
      </div>
    </div>
  );
};
export default ProductItem;
