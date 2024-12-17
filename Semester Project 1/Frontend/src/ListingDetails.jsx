import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ListingDetails.css";

const ListingDetails = ({ listings }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = listings.find((item) => item.id === parseInt(id));

  if (!listing) {
    return <div>Listing not found.</div>;
  }

  return (
    <div className="listing-details">
      <img src={listing.image} alt={listing.title} />
      <h1>{listing.title}</h1>
      <p>Type: {listing.type}</p>
      <p>Guests: {listing.guests}</p>
      <p>Bedrooms: {listing.bedrooms}</p>
      <p>Bathrooms: {listing.bathrooms}</p>
      <p>Price per night: ${listing.price}</p>
      <button onClick={() => navigate(`/book/${id}`)}>Book Now</button>
    </div>
  );
};

export default ListingDetails;
