import React from "react";
import Bannar from "../components/Bannar";
import TopSell from "../components/TopSell";
import AllProducts from "../components/products/AllProducts";

const Home = () => {
  return (
    <div>
      <Bannar />
      <AllProducts />
      {/* <TopSell /> */}
    </div>
  );
};

export default Home;
