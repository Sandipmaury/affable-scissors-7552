import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import ExplorePage from "./ExplorePage";
import { HomePage } from "./HomePage";
import { CartPage } from "./CartPage";
import EventPage from "./EventPage";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />

      <Route path="*" element={<ErrorPage />} />
      <Route path="/explore" element={<ExplorePage/>} />
      <Route path="/eventpage" element={<EventPage/>} />
    </Routes>
  );
};
