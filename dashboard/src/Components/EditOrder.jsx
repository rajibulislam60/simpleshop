import React, { useState } from "react";

const EditOrder = () => {
  const productList = [
    { name: "Burger", price: 250 },
    { name: "Pizza", price: 550 },
    { name: "Pasta", price: 300 },
    { name: "Sandwich", price: 200 },
  ];

  const [orderData, setOrderData] = useState({
    customerName: "John Doe",
    phone: "+8801712345678",
    address: "Bashundhara, Dhaka",
    note: "Please deliver fast.",
    orderTime: "2025-10-10 10:30 AM",
    deliveryCharge: 60,
    discount: 0,
    status: "Accepted",
  });

  const [orderProducts, setOrderProducts] = useState([
    { name: "Burger", price: 250 },
    { name: "Pizza", price: 550 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const [reviews, setReviews] = useState([
    { text: "Good service", time: "2025-10-10 11:00 AM" },
  ]);

  const previousOrders = [
    {
      id: 1,
      date: "2025-09-25",
      products: ["Burger", "Pasta"],
      total: 550,
      status: "Accepted",
    },
    {
      id: 2,
      date: "2025-09-20",
      products: ["Sandwich"],
      total: 200,
      status: "Canceled",
    },
  ];

  const handleAddProduct = () => {
    if (!selectedProduct) return;
    const product = productList.find((p) => p.name === selectedProduct);
    setOrderProducts([...orderProducts, product]);
    setSelectedProduct("");
  };

  const handleRemoveProduct = (index) => {
    const updated = orderProducts.filter((_, i) => i !== index);
    setOrderProducts(updated);
  };

  const handleChange = (field, value) => {
    setOrderData({ ...orderData, [field]: value });
  };

  const handleAddReview = () => {
    if (!reviewInput.trim()) return;
    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const newReview = { text: reviewInput, time: formattedTime };
    setReviews([newReview, ...reviews]);
    setReviewInput("");
  };

  const handleEditDone = () => {
    const totalPrice = orderProducts.reduce((sum, p) => sum + p.price, 0);
    const totalAmount =
      totalPrice + orderData.deliveryCharge - orderData.discount;

    const updatedOrder = {
      ...orderData,
      products: orderProducts,
      totalPrice,
      totalAmount,
      reviews,
    };
    console.log("✅ Updated Order Data:", updatedOrder);
    alert("Order edited successfully!");
  };

  const totalPrice = orderProducts.reduce((sum, p) => sum + p.price, 0);
  const totalAmount =
    totalPrice + orderData.deliveryCharge - orderData.discount;

  return (
    <div className="w-full h-screen overflow-y-auto p-5 bg-gray-50 rounded-md shadow">
      <h1 className="text-2xl font-semibold mb-5">Edit Order</h1>

      <div className="flex justify-between gap-5">
        {/* Left Side - Customer Info */}
        <div className="w-[60%] space-y-4">
          <div className="space-y-2">
            <div className="flex gap-3">
              <div className="w-1/2">
                <h4>Customer Name</h4>
                <input
                  type="text"
                  value={orderData.customerName}
                  onChange={(e) => handleChange("customerName", e.target.value)}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="w-1/2">
                <h4>Customer Number</h4>
                <input
                  type="text"
                  value={orderData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>

            <div>
              <h4>Customer Address</h4>
              <input
                type="text"
                value={orderData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <h4>Customer Note</h4>
              <input
                type="text"
                value={orderData.note}
                onChange={(e) => handleChange("note", e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <h4>Status</h4>
              <select
                value={orderData.status}
                onChange={(e) => handleChange("status", e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="Accepted">Accepted</option>
                <option value="On Hold">On Hold</option>
                <option value="Canceled">Canceled</option>
              </select>
            </div>

            <div>
              <h4>Order Review</h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={reviewInput}
                  onChange={(e) => setReviewInput(e.target.value)}
                  placeholder="Write a review..."
                  className="w-full border p-2 rounded"
                />
                <button
                  onClick={handleAddReview}
                  className="bg-teal-600 text-white px-4 rounded hover:bg-teal-700"
                >
                  Add Text
                </button>
              </div>
              {reviews.length > 0 && (
                <div className="mt-3 space-y-2">
                  {reviews.map((r, i) => (
                    <div
                      key={i}
                      className="border flex justify-between p-2 rounded bg-white shadow-sm text-sm"
                    >
                      <p>{r.text}</p>
                      <p className="text-gray-500 text-xs mt-1">⏰ {r.time}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h4>Order Time</h4>
              <input
                type="text"
                value={orderData.orderTime}
                onChange={(e) => handleChange("orderTime", e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Order Info */}
        <div className="w-[40%] space-y-4 border-l pl-5">
          <div>
            <div className="flex justify-between font-semibold border-b pb-1 mb-2">
              <h3>Product Name</h3>
              <h4>Price</h4>
            </div>

            <div className="space-y-2">
              {orderProducts.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <span>{item.name}</span>
                  <div className="flex gap-3 items-center">
                    <span>৳{item.price}</span>
                    <button
                      onClick={() => handleRemoveProduct(index)}
                      className="text-red-500 text-sm hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

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
                value={orderData.deliveryCharge}
                onChange={(e) =>
                  handleChange("deliveryCharge", Number(e.target.value))
                }
              />
            </div>
            <div className="flex justify-between">
              <h4>Discount</h4>
              <input
                type="number"
                className="w-20 border p-1 rounded text-right"
                value={orderData.discount}
                onChange={(e) =>
                  handleChange("discount", Number(e.target.value))
                }
              />
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <h2>Total Amount</h2>
              <p>৳{totalAmount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-6">
        <button
          onClick={handleEditDone}
          className="bg-teal-600 w-full text-white px-6 py-2 rounded-lg text-lg hover:bg-teal-700 shadow"
        >
          Done
        </button>
      </div>

      {/* Previous Orders */}
      <div className="mt-8 border-t pt-4">
        <h3 className="text-lg font-semibold mb-3">Previous Orders</h3>
        {previousOrders.length > 0 ? (
          <div className="space-y-3">
            {previousOrders.map((order) => (
              <div
                key={order.id}
                className="border p-3 rounded bg-white shadow-sm"
              >
                <p>
                  <strong>Date:</strong> {order.date}
                </p>
                <p>
                  <strong>Products:</strong> {order.products.join(", ")}
                </p>
                <p>
                  <strong>Total:</strong> ৳{order.total}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`${
                      order.status === "Accepted"
                        ? "text-green-600"
                        : "text-red-500"
                    } font-medium`}
                  >
                    {order.status}
                  </span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No previous orders found for this customer.</p>
        )}
      </div>
    </div>
  );
};

export default EditOrder;
