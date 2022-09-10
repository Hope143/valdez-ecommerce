import { Fragment } from "react";
import NavigationBar from "../components/navbar/navbar";
import HeroSection from "../components/homepage/heroSection";
import Categories from "../components/categories/categories";
import Products from "../components/products/products";

function Homepage() {
  return (
    <Fragment>
      <NavigationBar />
      <HeroSection />
      <Categories />
      <Products />
    </Fragment>
  );
}

export default Homepage;
