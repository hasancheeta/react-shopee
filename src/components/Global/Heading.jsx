import React from "react";

const Heading = ({ title, style, classes }) => {
  return (
    <div>
      <h2 className={`h-lg ${classes}`} style={style}>
        {title}
      </h2>
    </div>
  );
};
export default Heading;
