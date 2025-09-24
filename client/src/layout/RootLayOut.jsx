import React, { useState } from "react";
import { Outlet } from "react-router";
import Search from "../components/Search";
import Footer from "../components/Footer";
import data from "../components/data";

const RootLayOut = () => {
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
      <Outlet context={{ filterProducts }} />
      <Footer />
    </div>
  );
};

export default RootLayOut;
