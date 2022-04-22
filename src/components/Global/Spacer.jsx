import React from "react";

const Spacer = ({ style, height }) => {
  return <div className="spacer" style={style || { height }}></div>;
};
export default Spacer;
