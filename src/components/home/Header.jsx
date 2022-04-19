import React from "react";

//import components
import TopBar from "./TopBar";
import MiddleBar from "./MiddleBar";
import LowerBar from "./LowerBar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <header class="header">
      <TopBar />
      <MiddleBar />
      <LowerBar />
      <HeroSection />
    </header>
  );
};

export default Header;
