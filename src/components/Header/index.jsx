import React from "react";

//import components
import TopBar from "./TopBar";
import MiddleBar from "./MiddleBar";
import LowerBar from "./LowerBar";

const Header = () => {
  return (
    <header className="header">
      <TopBar />
      <MiddleBar />
      <LowerBar />
    </header>
  );
};

export default Header;
