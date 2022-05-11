import React from "react";

//import query(s)
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../Graphql/Queries";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  //emit a toast
  const notify = () => {
    toast("🦄 Added to the cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
            return (
              <ProductItem notify={notify} product={product} key={product.id} />
            );
          })}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default Shop;
