import React, { useState } from "react";

const EditOrder = () => {
  // available product list
  const productList = [
    { name: "Burger", price: 250 },
    { name: "Pizza", price: 550 },
    { name: "Pasta", price: 300 },
    { name: "Sandwich", price: 200 },
  ];

  // existing ordered products (for example)
  const [orderProducts, setOrderProducts] = useState([
    { name: "Burger", price: 250 },
    { name: "Pizza", price: 550 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(60);
  const [discount, setDiscount] = useState(0);

  // add new product to order
  const handleAddProduct = () => {
    if (!selectedProduct) return;

    const product = productList.find((p) => p.name === selectedProduct);
    setOrderProducts([...orderProducts, product]);
    setSelectedProduct("");
  };

  // total calculation
  const totalPrice = orderProducts.reduce((sum, p) => sum + p.price, 0);
  const totalAmount = totalPrice + deliveryCharge - discount;

  return (
    <div className="w-full p-5 bg-gray-50 rounded-md shadow">
      <h1 className="text-2xl font-semibold mb-5">Edit Order</h1>

      <div className="flex justify-between gap-5">
        {/* Left Side - Customer Info */}
        <div className="w-[60%] space-y-3">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Customer Name"
              className="w-1/2 border p-2 rounded"
            />
            <input
              type="number"
              placeholder="Customer Phone"
              className="w-1/2 border p-2 rounded"
            />
          </div>

          <input
            type="text"
            placeholder="Customer Address"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Note"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Right Side - Order Info */}
        <div className="w-[40%] space-y-4 border-l pl-5">
          {/* Product list */}
          <div>
            <div className="flex justify-between font-semibold border-b pb-1 mb-2">
              <h3>Product Name</h3>
              <h4>Price</h4>
            </div>

            <div className="space-y-2">
              {orderProducts.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between bg-white p-2 rounded border"
                >
                  <span>{item.name}</span>
                  <span>৳{item.price}</span>
                </div>
              ))}
            </div>

            {/* Dropdown + Add button */}
            <div className="flex gap-2 mt-3">
              <select
                className="w-full border p-2 rounded"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                <option value="">Select Product</option>
                {productList.map((product, index) => (
                  <option key={index} value={product.name}>
                    {product.name} - ৳{product.price}
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddProduct}
                className="bg-teal-600 text-white px-3 rounded hover:bg-teal-700"
              >
                Add
              </button>
            </div>
          </div>

          {/* Summary Section */}
          <div className="space-y-2 border-t pt-2">
            <div className="flex justify-between">
              <h3>Total Price</h3>
              <p>৳{totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <h4>Delivery Charge</h4>
              <input
                type="number"
                className="w-20 border p-1 rounded text-right"
                value={deliveryCharge}
                onChange={(e) => setDeliveryCharge(Number(e.target.value))}
              />
            </div>
            <div className="flex justify-between">
              <h4>Discount</h4>
              <input
                type="number"
                className="w-20 border p-1 rounded text-right"
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
              />
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <h2>Total Amount</h2>
              <p>৳{totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;
