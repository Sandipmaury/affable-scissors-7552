import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsNewContainer from "../Pages/ProductsPages/NewProduct/ProductsNewContainer";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/newproucts" element={<ProductsNewContainer/>}/>
    </Routes>
  );
};
