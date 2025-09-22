import React, { useState } from "react";
import Container from "./Container";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <Container>
        <div className="py-3 px-2 flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <h1 className="text-2xl font-bold">SimpleShop</h1>
            <h4 className="text-md font-normal">Brends</h4>
          </div>
          <input
            type="text"
            placeholder="Search products ....."
            value={query}
            onChange={handleSearch}
            className="w-[450px] px-4 py-2 border border-gray-500 rounded-full"
          />
        </div>
      </Container>
    </div>
  );
};

export default Search;
