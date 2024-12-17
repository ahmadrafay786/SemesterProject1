import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./BookingPage.css";

const BookingPage = ({ listings }) => {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === parseInt(id));

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalDays =
      (new Date(formData.checkOut) - new Date(formData.checkIn)) /
      (1000 * 60 * 60 * 24);
    const totalPrice = totalDays * listing.price;
    alert(`Total Price: $${totalPrice}`);
  };

  if (!listing) {
    return <div>Listing not found.</div>;
  }

  return (
    <div className="booking-page">
      <h1>Booking for {listing.title}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Check-In Date:
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Check-Out Date:
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Calculate Total Price</button>
      </form>
      <div className="summary">
        <p>Price per night: ${listing.price}</p>
        <p>Type: {listing.type}</p>
        <p>Guests: {listing.guests}</p>
        <p>Bedrooms: {listing.bedrooms}</p>
        <p>Bathrooms: {listing.bathrooms}</p>
      </div>
    </div>
  );
};

export default BookingPage;
