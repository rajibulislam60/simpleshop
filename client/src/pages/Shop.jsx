import React from "react";
import AllProducts from "../components/products/AllProducts";
import { useOutletContext } from "react-router";

const Shop = () => {
  const { filterProducts } = useOutletContext();
  return (
    <div>
      <AllProducts products={filterProducts} />
    </div>
  );
};

export default Shop;
