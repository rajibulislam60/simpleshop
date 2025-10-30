import React, { useState } from "react";
import Container from "./Container";
import { IoSearch } from "react-icons/io5";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="border-b-1">
      <Container>
        <div className="py-3 px-2 md:flex justify-between items-center">
          <div className="flex gap-8 items-center mb-3 md:mb-0">
            <h1 className="text-2xl font-bold">SimpleShop</h1>
            <h4 className="text-md font-normal">Brends</h4>
          </div>
          <div className="relative">
            <IoSearch className="absolute top-[50%] translate-y-[-50%] left-4" />
            <input
              type="text"
              placeholder="Search products ....."
              value={query}
              onChange={handleSearch}
              className="md:w-[450px] w-full px-10 py-2 border border-gray-500 rounded-full relative"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Search;
