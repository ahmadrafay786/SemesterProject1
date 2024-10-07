import React from 'react';
import "../../src/ListingCard.css";

const ListingCard = ({ image, title, type, guests, bedrooms, bathrooms, price, rating }) => (
    <div className="listing-card">
      <img src={image} alt={title} className="listing-image" />
      <div className="listing-info">
        <h3>{title}</h3>
        <p>{type}</p>
        <p>{guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms</p>
        <p>${price} / night</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );

export default ListingCard