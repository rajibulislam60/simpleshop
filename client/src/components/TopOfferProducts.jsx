import React from "react";
import data from "./data";
import { useNavigate } from "react-router";

const TopOfferProducts = () => {
  const navigate = useNavigate();
  const topOffer = data.slice(0, 6);

  const handleClicktoId = (id) => {
    navigate(`/shop/${id}`);
  };

  return (
    <div className="pt-[60px] px-5">
      <h2 className="text-2xl font-bold text-center mb-6">
        Top Brands & Offers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 justify-items-center">
        {topOffer.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClicktoId(item.id)}
            className="w-full max-w-[440px] h-[120px] md:h-[200px] overflow-hidden shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopOfferProducts;
