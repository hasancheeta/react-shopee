import React from "react";

//import query(s)
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../Graphql/Queries";

//import components
import Heading from "../Global/Heading";
import Spacer from "../Global/Spacer";
import ProductItem from "./ProductItem";

const Shop = () => {
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useQuery(GET_ALL_PRODUCTS);
  console.log(products, productsLoading, productsError);
  return (
    <div className="shop_container flex flex-row flex-space-between">
      <div className="filters_section">
        <h3>Filters reside here</h3>
      </div>
      <div className="shop_body flex flex-column flex-align-center">
        <Heading
          title={"product store"}
          style={{ color: "var(--pink)", width: "fit-content" }}
        />
        <Spacer height={70} />
        <div className="products-grid grid">
          {products?.products?.data?.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Shop;
