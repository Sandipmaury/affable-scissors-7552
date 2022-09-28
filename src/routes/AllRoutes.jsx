import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import ExplorePage from "./ExplorePage";
import { HomePage } from "./HomePage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/explore" element={<ExplorePage/>} />
    </Routes>
  );
};
