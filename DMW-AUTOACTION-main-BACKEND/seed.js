// seed.js
const mongoose = require('mongoose');
const CarPart = require('./src/models/CarPart'); // Adjust the path to your CarPart model if necessary

// Define the data you want to insert
const partsData = [
  { make: 'TATA', model: 'SAFARI', year: '2011', partName: 'Headlight', condition: 'Used', price: 1500, availability: true },
  { make: 'HONDA', model: 'MOBILIO', year: '2014', partName: 'Rear Bumper', condition: 'New', price: 3000, availability: true },
  { make: 'SUZUKI', model: 'SWIFT', year: '2012', partName: 'Engine', condition: 'Used', price: 12000, availability: true },
  { make: 'TOYOTA', model: 'INNOVA', year: '2013', partName: 'Transmission', condition: 'Used', price: 5000, availability: false },
  { make: 'MAHINDRA', model: 'BOLERO', year: '2010', partName: 'Steering Wheel', condition: 'New', price: 1000, availability: true }
];




const seedDatabase = async () => {
  try {
    await CarPart.insertMany(partsData);
    console.log('Data seeded successfully!');
  } catch (err) {
    console.error('Error seeding data:', err);
  }
};

module.exports = seedDatabase; // Export the function
