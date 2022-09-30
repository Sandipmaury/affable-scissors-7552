import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import ExplorePage from "./ExplorePage";
import { HomePage } from "./HomePage";
import { CartPage } from "./CartPage";
import { Payment } from "./Payment";
import { Otp } from "./Otp";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/otp" element={<Otp />} />

      <Route path="*" element={<ErrorPage />} />
      <Route path="/explore" element={<ExplorePage />} />
    </Routes>
  );
};
