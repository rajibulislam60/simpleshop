import React from "react";
import Slider from "react-slick";
import bannar from "../images/bannar.webp";
import bannar1 from "../images/bannar1.webp";

const data = [
  {
    id: 1,
    image: bannar1,
    name: "offer the product",
  },
  {
    id: 2,
    image: bannar,
    name: "offer the product",
  },
];

const Bannar = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="w-100%">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="w-full h-[150px] md:h-[400px]">
            <img src={item.image} alt={item.name} className="w-full h-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Bannar;
