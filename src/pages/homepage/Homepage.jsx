import React, { useEffect } from "react";
import { HomeMain } from "../../style/Container";
import {
  ButtonLoader,
  ForYou,
  HeroBanner,
  ProductCategory,
  ToTop,
} from "../../components";
import { sliderItems } from "../../data/sliderData";

function Homepage() {


  return (
    <HomeMain>
      <HeroBanner data={sliderItems} />
      <ProductCategory />
      <ForYou />
      <ToTop />
    </HomeMain>
  );
}

export default Homepage;
