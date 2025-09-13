import React from "react";
import Bannar from "../components/Bannar";
import TopSell from "../components/TopSell";
import AllProducts from "../components/products/AllProducts";
import TopOfferProducts from "../components/TopOfferProducts";
import Footer from "../components/Footer";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Search />
      <Bannar />
      {/* <AllProducts /> */}
      <TopSell />
      <TopOfferProducts />
      <Footer />
    </div>
  );
};

export default Home;
