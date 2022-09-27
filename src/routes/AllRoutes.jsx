import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
