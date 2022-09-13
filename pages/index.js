import { Fragment } from "react";
import NavigationBar from "../components/navbar/navbar";
import HeroSection from "../components/homepage/heroSection";
import Categories from "../components/categories/categories";
import Products from "../components/products/products";
import NewsLetter from "../components/newsletter/newsletter";
import Footer from "../components/footer/footer";

function Homepage() {
  return (
    <Fragment>
      <NavigationBar />
      <HeroSection />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </Fragment>
  );
}

export default Homepage;
