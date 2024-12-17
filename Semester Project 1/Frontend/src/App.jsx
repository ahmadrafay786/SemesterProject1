import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Replace this with an API call in the future
    const mockListings = [
      { id: 1, image: "/images/house-1.png", title: "Beautiful Beachfront House", type: "Entire home", guests: 4, bedrooms: 2, bathrooms: 1, price: 150 },
      { id: 2, image: "/images/house-2.png", title: "Cozy Cabin", type: "Private room", guests: 2, bedrooms: 1, bathrooms: 1, price: 100 },
    ];
    setListings(mockListings);
  }, []);

  return (
    <Router>
      <AppRoutes listings={listings} />
    </Router>
  );
};

export default App;
