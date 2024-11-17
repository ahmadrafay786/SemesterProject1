const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Static Data
const listings = [
    { id: 1, name: "Cozy Apartment", location: "Downtown", price: 100 },
    { id: 2, name: "Beach House", location: "Seaside", price: 200 },
    { id: 3, name: "Mountain Cabin", location: "Highlands", price: 150 },
];

const bookings = [];

// API Endpoints

app.get('/', (req, res) => {
    res.send('Welcome to the API! Use /api/listings or other API endpoints.');
});
// Get all listings
app.get('/api/listings', (req, res) => {
    res.json(listings);
});

// Get listing details by ID
app.get('/api/listings/:id', (req, res) => {
    const listing = listings.find((item) => item.id === parseInt(req.params.id));
    if (listing) {
        res.json(listing);
    } else {
        res.status(404).json({ message: "Listing not found" });
    }
});

// Search listings by location
app.get('/api/listings/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const filteredListings = listings.filter((item) =>
        item.location.toLowerCase().includes(query)
    );
    res.json(filteredListings);
});

// Create a booking (mock)
app.post('/api/bookings', (req, res) => {
    const { listingId, user, date } = req.body;
    if (!listingId || !user || !date) {
        return res.status(400).json({ message: "Invalid booking data" });
    }

    const newBooking = {
        id: bookings.length + 1,
        listingId,
        user,
        date,
    };

    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
