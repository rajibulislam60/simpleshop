import React, { useState } from "react";
import AllProducts from "../components/products/AllProducts";
import Search from "../components/Search";
import data from "../components/data";

const Shop = () => {
  const [filterProducts, setFilterProducts] = useState(data);
  const handleSearch = (query) => {
    if (!query) {
      setFilterProducts(data);
      return;
    }

    const lower = query.toLowerCase();

    const extraMatch = data.filter((p) => p.name.toLowerCase() === lower);

    if (extraMatch.length > 0) {
      setFilterProducts(extraMatch);
    } else {
      const related = data.filter((p) => p.name.toLowerCase().includes(lower));
      setFilterProducts(related);
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <AllProducts products={filterProducts} />
    </div>
  );
};

export default Shop;
