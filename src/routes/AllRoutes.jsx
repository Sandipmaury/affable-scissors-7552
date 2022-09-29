import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsNewContainer from "../Pages/ProductsPages/NewProduct/ProductsNewContainer";
import { ErrorPage } from "./ErrorPage";
import ExplorePage from "./ExplorePage";
import { HomePage } from "./HomePage";
import { CartPage } from "./CartPage";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />

      <Route path="*" element={<ErrorPage />} />
<<<<<<< HEAD
      <Route path="/newproucts" element={<ProductsNewContainer/>}/>
=======
      <Route path="/explore" element={<ExplorePage/>} />
>>>>>>> eccb5f5bc7d6adfd677941e69d542e0e1cbbf9a8
    </Routes>
  );
};
