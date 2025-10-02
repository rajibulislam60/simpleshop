import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import data from "../data";
import Container from "../Container";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = data.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleOrder = () => {
    navigate(`/address`, {
      state: { product, quantity },
    });
  };

  return (
    <div className="mx-auto p-6">
      <Container>
        <div>
          <Link to="/shop" className="text-blue-600 underline">
            ← Back to Products
          </Link>

          <div className="flex p-6 mt-4">
            <img
              src={product.image}
              alt={product.name}
              className="md:w-[50%] h-[350px] object-cover rounded"
            />
            <div className="md:w-[50%] px-8 mt-4">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <h3 className="text-blue-600 font-semibold">
                Tk {product.price}
              </h3>
              <h5 className="text-sm text-gray-600">
                Stock: {product.quantity}
              </h5>

              {/* Quantity Selector */}
              <div className="flex items-center gap-3 my-3">
                <button
                  onClick={decrease}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <h3 className="font-semibold">{quantity}</h3>
                <button
                  onClick={increase}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleOrder(product.id)}
                className="bg-blue-600 w-full text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Order
              </button>

              <p className="text-sm text-gray-700 mt-3">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
