import React from "react";

const Heading = ({ title, style, classes, borderColor, color }) => {
  return (
    <div>
      <h2
        className={`h-lg ${classes}`}
        style={style || { borderColor } || { color }}
      >
        {title}
      </h2>
    </div>
  );
};
export default Heading;
