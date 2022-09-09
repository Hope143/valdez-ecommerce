import { Fragment } from "react";
import NavigationBar from "../components/navbar/navbar";
import HeroSection from "../components/homepage/heroSection";
import Categories from "../components/categories/categories";

function Homepage() {
  return (
    <Fragment>
      <NavigationBar />
      <HeroSection />
      <Categories />
    </Fragment>
  );
}

export default Homepage;
