import React from "react";
import Container from "./../components/Container";

const Address = () => {
  return (
    <div>
      <Container>
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Address"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div>
              <p className="mb-2 font-medium">Select City:</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="city" value="Dhaka" />
                  Dhaka
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="city" value="Chattogram" />
                  Chattogram
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="city" value="Khulna" />
                  Khulna
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-800 text-white py-2 px-4 rounded-md font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Address;
