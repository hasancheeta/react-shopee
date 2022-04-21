import React from "react";

//import compnents
import CtaBar from "./CtaBar";
import HeroSection from "./HeroSection";
import ProductCats from "./ProductCats";
import Quote from "../Quote";
import Spacer from "../Global/Spacer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CtaBar />
      <ProductCats />
      <Spacer height={120} />
      <Quote />
    </div>
  );
};
export default Home;
