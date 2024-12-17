import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";
import ListingDetails from "./ListingDetails";

const AppRoutes = ({ listings }) => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route
      path="/listings/:id"
      element={<ListingDetails listings={listings} />}
    />
    <Route
      path="/book/:id"
      element={<BookingPage listings={listings} />}
    />
  </Routes>
);

export default AppRoutes;
