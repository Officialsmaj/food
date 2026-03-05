// Sample data for the food delivery website

const categories = [
    { id: 1, name: 'Pizza', image: 'assets/images/pazza.jpg' },
    { id: 2, name: 'Burger', image: 'assets/images/burger.jpg' },
    { id: 3, name: 'Pasta', image: 'assets/images/margherita pizza.jpg' },
    { id: 4, name: 'Salad', image: 'assets/images/salad.jpg' },
    { id: 5, name: 'Dessert', image: 'assets/images/dessert.jpg' },
    { id: 6, name: 'Beverage', image: 'assets/images/beverage.jpg' }
];

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

const menuItems = [
    {
        id: 1,
        name: 'Margherita Pizza',
        category: 'Pizza',
        price: 12.99,
        image: 'assets/images/margherita pizza.jpg',
        description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
        restaurantId: 1
    },
    {
        id: 2,
        name: 'Pepperoni Pizza',
        category: 'Pizza',
        price: 14.99,
        image: 'assets/images/Pepperoni Pizza.jpg',
        description: 'Pizza topped with pepperoni and extra cheese.',
        restaurantId: 1
    },
    {
        id: 3,
        name: 'Cheeseburger',
        category: 'Burger',
        price: 9.99,
        image: 'assets/images/Cheeseburger.jpg',
        description: 'Juicy beef patty with cheese, lettuce, and tomato.',
        restaurantId: 2
    },
    {
        id: 4,
        name: 'Chicken Burger',
        category: 'Burger',
        price: 10.99,
        image: 'assets/images/Chicken Burger.jpg',
        description: 'Grilled chicken breast with mayo and veggies.',
        restaurantId: 2
    },
    {
        id: 5,
        name: 'Spaghetti Carbonara',
        category: 'Pasta',
        price: 13.99,
        image: 'assets/images/Spaghetti Carbonara.jpg',
        description: 'Creamy pasta with bacon, eggs, and Parmesan.',
        restaurantId: 1
    },
    {
        id: 6,
        name: 'Caesar Salad',
        category: 'Salad',
        price: 8.99,
        image: 'assets/images/Caesar Salad.jpg',
        description: 'Crisp romaine lettuce with Caesar dressing and croutons.',
        restaurantId: 4
    },
    {
        id: 7,
        name: 'Chocolate Cake',
        category: 'Dessert',
        price: 6.99,
        image: 'assets/images/Chocolate Cake.jpg',
        description: 'Rich chocolate cake with vanilla frosting.',
        restaurantId: 3
    },
    {
        id: 8,
        name: 'Coca Cola',
        category: 'Beverage',
        price: 2.99,
        image: 'assets/images/Coca Cola.jpg',
        description: 'Refreshing carbonated soft drink.',
        restaurantId: 2
    },
    {
        id: 9,
        name: 'Pad Thai',
        category: 'Pasta',
        price: 11.99,
        image: 'assets/images/Pad Thai.jpg',
        description: 'Stir-fried rice noodles with shrimp and peanuts.',
        restaurantId: 3
    },
    {
        id: 10,
        name: 'Greek Salad',
        category: 'Salad',
        price: 9.99,
        image: 'assets/images/Greek Salad.jpg',
        description: 'Fresh vegetables with feta cheese and olives.',
        restaurantId: 4
    }
];

// Export data for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categories, restaurants, menuItems };
}
