import React from 'react';
import { Link } from 'react-router-dom';
import "../../src/ListingCard.css";

const ListingCard = ({ id, image, title, type, guests, bedrooms, bathrooms, price, rating }) => (
  <div className="listing-card">
    <img src={image} alt={title} className="listing-image" />
    <div className="listing-info">
      <h3>{title}</h3>
      <p>Type: {type}</p>
      <p>
        {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms
      </p>
      <p>${price} / night</p>
      <p>Rating: {rating}</p>
    </div>
    <Link to={`/listings/${id}`} className="view-details-btn">
      View Details
    </Link>
  </div>
);

export default ListingCard;
