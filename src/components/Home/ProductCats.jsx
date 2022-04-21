import React from "react";

//import components
import Heading from "../Global/Heading";
import Spacer from "../Global/Spacer";
import DualButton from "../Global/DualButton";

const ProductCats = () => {
  return (
    <div>
      <Spacer height={120} />
      <div className="product-categories">
        <section className="flex flex-column flex-align-center">
          <Heading
            title={"product categories"}
            style={{ width: "fit-content", padding: "0 30px" }}
            classes={"h-lg h-orange"}
          />

          <Spacer height={70} />
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
          <Spacer height={40} />

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
