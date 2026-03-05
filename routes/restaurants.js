const express = require('express');
const router = express.Router();

const restaurants = [
    {
        id: 1,
        name: 'Italian Delight',
        image: 'assets/images/Italian Delight.jpeg',
        cuisine: 'Italian',
        rating: 4.5,
        deliveryTime: '25-30 min',
        description: 'Authentic Italian cuisine with fresh ingredients.'
    },
    {
        id: 2,
        name: 'Burger Junction',
        image: 'assets/images/Burger Junction.webp',
        cuisine: 'American',
        rating: 4.2,
        deliveryTime: '20-25 min',
        description: 'Juicy burgers and crispy fries made to perfection.'
    },
    {
        id: 3,
        name: 'Asian Fusion',
        image: 'assets/images/Asian Fusion.jpeg',
        cuisine: 'Asian',
        rating: 4.7,
        deliveryTime: '30-35 min',
        description: 'A blend of flavors from across Asia.'
    },
    {
        id: 4,
        name: 'Healthy Eats',
        image: 'assets/images/Healthy Eats.jpg',
        cuisine: 'Healthy',
        rating: 4.3,
        deliveryTime: '15-20 min',
        description: 'Nutritious and delicious healthy options.'
    }
];

router.get('/', (req, res) => {
  res.json(restaurants);
});

module.exports = router;
