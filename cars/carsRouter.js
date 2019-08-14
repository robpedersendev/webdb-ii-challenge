const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cars = await db('cars');
    res.json(cars);
  } catch (err) {
    res.status(500).json({ Error: 'Failed to retrieve Cars' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const car = await db('cars').where({ id });
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve fruit' });
  }
});

router.post('/', async (req, res) => {
  const carData = req.body;
  try {
    const [id] = await db('cars').insert(carData);
    const newCarEntry = await db('cars').where({ id });
    res.status(201).json(newCarEntry);
  } catch (err) {
    res.status(500).json({ Error: 'Failed to store data', Error: err.message });
  }
});

module.exports = router;
