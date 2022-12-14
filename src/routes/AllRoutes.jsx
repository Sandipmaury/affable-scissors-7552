import React from "react";
import { Route, Routes } from "react-router-dom";
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
import BrandPage from "./BrandPage";
import NewArrivalPage from "./NewArrivalPage";
import { PraviteRoute } from "../components/PraviteRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/cart"
        element={
          <PraviteRoute>
            <CartPage />
          </PraviteRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/newproucts" element={<NewArrivalPage />} />
      <Route path="/brandProducts" element={<BrandPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/eventpage" element={<EventPage />} />
      <Route
        path="/otp"
        element={
          <PraviteRoute>
            <Otp />
          </PraviteRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <PraviteRoute>
            <Payment />
          </PraviteRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/routine" element={<Routine />} />
    </Routes>
  );
};
