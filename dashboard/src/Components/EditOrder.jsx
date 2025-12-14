import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

const EditOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [orderData, setOrderData] = useState({
    customerName: "",
    phone: "",
    address: "",
    note: "",
    status: "pending",
    courier: "None",
    deliveryCharge: 0,
    discount: 0,
  });

  const [orderProducts, setOrderProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchSingleOrder();
    fetchProductList();
  }, []);

  const fetchSingleOrder = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/order/singleorder/${id}`,
        { withCredentials: true }
      );
      const order = res.data.data;

      setOrderData({
        customerName: order.customer.c_name,
        phone: order.customer.phone,
        address: order.customer.address,
        note: order.note,
        status: order.status,
        courier: order.courier || "None",
        deliveryCharge: order.deliveryCharge || 0,
        discount: order.discount || 0,
      });

      setOrderProducts(order.products);
      setReviews(order.reviews || []);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProductList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/product/allproducts",
        { withCredentials: true }
      );
      setProductList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (field, value) => {
    setOrderData({ ...orderData, [field]: value });
  };

  const handleQuantityChange = (index, quantity) => {
    const newProducts = [...orderProducts];
    newProducts[index].quantity = Number(quantity);
    setOrderProducts(newProducts);
  };

  const handleAddProduct = () => {
    if (!selectedProduct) return;
    const product = productList.find((p) => p._id === selectedProduct);
    setOrderProducts([...orderProducts, { ...product, quantity: 1 }]);
    setSelectedProduct("");
  };

  const handleRemoveProduct = (index) => {
    setOrderProducts(orderProducts.filter((_, i) => i !== index));
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

  const handleEditDone = async () => {
    try {
      await axios.put(
        `http://localhost:8000/api/v1/order/edit/${id}`,
        {
          customer: {
            c_name: orderData.customerName,
            phone: orderData.phone,
            address: orderData.address,
          },
          products: orderProducts,
          note: orderData.note,
          status: orderData.status,
          courier: orderData.courier,
          reviews,
          deliveryCharge: orderData.deliveryCharge,
          discount: orderData.discount,
        },
        { withCredentials: true }
      );
      alert("Order updated successfully!");
      navigate("/allorder");
    } catch (error) {
      console.log(error);
      alert("Failed to update order!");
    }
  };

  const totalPrice = orderProducts.reduce(
    (sum, p) => sum + p.price * (p.quantity || 1),
    0
  );
  const totalAmount =
    totalPrice + orderData.deliveryCharge - orderData.discount;

  return (
    <div className="w-full h-screen overflow-y-auto p-5 bg-gray-50 rounded-md shadow">
      <h1 className="text-2xl font-semibold mb-5">Edit Order</h1>

      <div className="flex justify-between gap-5">
        {/* Left Side */}
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
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="hold">Hold</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div>
              <h4>Courier</h4>
              <select
                value={orderData.courier}
                onChange={(e) => handleChange("courier", e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="None">None</option>
                <option value="SteadFast">SteadFast</option>
                <option value="Pathao">Pathao</option>
                <option value="RedEx">RedEx</option>
                <option value="CarryBee">CarryBee</option>
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
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[40%] space-y-4 border-l pl-5">
          <div>
            <div className="flex justify-between font-semibold border-b pb-1 mb-2">
              <h3>Product Name</h3>
              <h4>Price x Quantity</h4>
            </div>

            <div className="space-y-2">
              {orderProducts.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <span>{item.name}</span>
                  <div className="flex gap-2 items-center">
                    <span>৳{item.price}</span>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity || 1}
                      onChange={(e) =>
                        handleQuantityChange(index, e.target.value)
                      }
                      className="w-16 border p-1 rounded text-right"
                    />
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
                {productList.map((product) => (
                  <option key={product._id} value={product._id}>
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
      </div>

      <div className="w-full mt-6">
        <button
          onClick={handleEditDone}
          className="bg-teal-600 w-full text-white px-6 py-2 rounded-lg text-lg hover:bg-teal-700 shadow"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default EditOrder;
