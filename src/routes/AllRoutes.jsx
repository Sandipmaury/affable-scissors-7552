import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsNewContainer from "../Pages/ProductsPages/NewProduct/ProductsNewContainer";
import ProductsBrandContainer from "../Pages/ProductsPages/BrandProduct/ProductsBrandContainer";
import { ErrorPage } from "./ErrorPage";
import ExplorePage from "./ExplorePage";
import { HomePage } from "./HomePage";
import { CartPage } from "./CartPage";
import EventPage from "./EventPage";
import { Otp } from "./Otp";
import { Payment } from "./Payment";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import UserPage from "./UserPage";
import { Routine } from "./Routine";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/newproucts" element={<ProductsNewContainer />} />
      <Route path="/brandProducts" element={<ProductsBrandContainer />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/eventpage" element={<EventPage />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/routine" element={<Routine />} />
    </Routes>
  );
};
