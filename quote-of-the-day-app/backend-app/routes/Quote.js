// routes/quotes.js

const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// routes/quotes.js

// Create a new quote
router.post('/', (req, res) => {
    const { text, date } = req.body;
  
    const newQuote = new Quote({
      text,
      date,
    });
  
    newQuote.save((err, savedQuote) => {
      if (err) {
        return res.status(500).json({ error: 'Error saving quote' });
      }
      return res.status(201).json(savedQuote);
    });
  });
  

module.exports = router;
