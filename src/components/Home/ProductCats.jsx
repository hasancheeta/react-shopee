import React from "react";

//import components
import Heading from "../Global/Heading";
import Spacer from "../Global/Spacer";
import DualButton from "../Global/DualButton";

const ProductCats = () => {
  return (
    <div>
      <Spacer style={{ height: "120px" }} />
      <div className="product-categories">
        <section className="flex flex-column flex-align-center">
          <Heading
            title={"product categories"}
            style={{ width: "fit-content", padding: "0 30px" }}
            classes={"h-lg h-orange"}
          />

          <Spacer style={{ height: "70px" }} />
          <div
            className="products-grid grid"
            style={{
              gridTemplateColumns: "auto auto auto auto",
              rowGap: "10px",
              columnGap: "10px",
            }}
          >
            <div className="grid-item">
              <div className="background-overlay"></div>
              <h3 className="product-title">pens</h3>
            </div>
            <div className="grid-item">
              <div className="background-overlay"></div>
              <h3 className="product-title">pens</h3>
            </div>
            <div className="grid-item">
              <div className="background-overlay"></div>
              <h3 className="product-title">pens</h3>
            </div>
            <div className="grid-item">
              <div className="background-overlay"></div>
              <h3 className="product-title">pens</h3>
            </div>
            <div className="grid-item">
              <div className="background-overlay"></div>
              <h3 className="product-title">pens</h3>
            </div>
            <div className="grid-item">
              <div className="background-overlay"></div>
              <h3 className="product-title">pens</h3>
            </div>
            <div className="grid-item">
              <div className="background-overlay"></div>
              <h3 className="product-title">pens</h3>
            </div>
            <div className="grid-item">
              <div className="background-overlay"></div>
              <h3 className="product-title">pens</h3>
            </div>
          </div>
          <Spacer style={{ height: "40px" }} />

          <DualButton
            title={"visit shop"}
            style={{ borderColor: "var(--green)", color: "var(--green)" }}
            url={"#"}
          />
        </section>
      </div>
    </div>
  );
};
export default ProductCats;
