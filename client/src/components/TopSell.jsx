import React from "react";
import data from "./data";

const TopSell = () => {
  return (
    <div>
      {data.map((item) => (
        <div>
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <h2>{item.price}</h2>
          <div>
            <button>order</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopSell;
