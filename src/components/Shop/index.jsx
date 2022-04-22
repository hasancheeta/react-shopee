import React from "react";

//import components
import Heading from "../Global/Heading";
import Spacer from "../Global/Spacer";
import ProductItem from "./ProductItem";

const Shop = () => {
  return (
    <div className="shop_container">
      <div className="filters_section">
        <h3>Filters reside here</h3>
      </div>
      <div className="shop_body">
        <Heading title={"product store"} style={{ color: "var(--pink)" }} />
        <Spacer height={70} />
        <ProductItem />
      </div>
    </div>
  );
};
export default Shop;
