import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from "./layout/RootLayOut";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import AllProduct from "./pages/AllProduct";
import AllOrder from "./pages/AllOrder";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/allorder" element={<AllOrder />} />
        </Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
