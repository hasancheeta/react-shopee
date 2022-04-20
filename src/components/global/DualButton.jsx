import React from "react";

const DualButton = ({ style }) => {
  return (
    <div className="dual-btn-parent" style={style || {}}>
      <div className="dual-btn-child flex flex-align-center flex-justify-center">
        <span className="btn-text">
          <a href="#">View All Products</a>
        </span>
      </div>
    </div>
  );
};
export default DualButton;
