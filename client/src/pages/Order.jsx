import React from "react";
import Container from "../components/Container";
import { useParams } from "react-router";
import data from "../components/data";

const Order = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <Container>
        <h2 className="text-red-500">Product not found!</h2>
      </Container>
    );
  }

  const productTotalPrice = product.quantity * product.price;

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center">
          <img
            className="w-30 h-10 object-cover"
            src={product.image}
            alt={product.name}
          />
          <h3>{product.name}</h3>
          <h4>Quantity: {product.quantity}</h4>
          <h4>Price per unit: {product.price}</h4>
          <h4>Total Price: {productTotalPrice}</h4>
        </div>
      </Container>
    </div>
  );
};

export default Order;
