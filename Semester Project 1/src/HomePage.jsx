import React, { useEffect, useState } from 'react';
import "./../src/HomePage.css";
import Categories from './components/Categories';
import Footer from './components/Footer';
import ListingCard from './components/ListingCard';
import Navbar from './components/NavBar';
import SearchBar from './components/SearchBar';


const HomePage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
  
    const mockListings = [
      {
        id: 1,
        image: '/images/house1.jpg',
        title: 'Beautiful Beachfront House',
        type: 'Entire home',
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        price: 150,
        rating: 4.8,
      },
      {
        id: 2,
        image: '/images/house2.jpg',
        title: 'Cozy Cabin',
        type: 'Private room',
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        price: 100,
        rating: 4.6,
      },
    ];
    setListings(mockListings);
  }, []);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <Categories />
      <div className="listings-grid">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
