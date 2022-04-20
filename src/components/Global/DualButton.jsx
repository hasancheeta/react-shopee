import React from "react";

const DualButton = ({ style, title, url }) => {
  return (
    <div className="dual-btn-parent" style={style}>
      <div className="dual-btn-child flex flex-align-center flex-justify-center">
        <span className="btn-text">
          <a href={url}>{title}</a>
        </span>
      </div>
    </div>
  );
};
export default DualButton;
