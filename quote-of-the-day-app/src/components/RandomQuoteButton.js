// src/components/RandomQuoteButton.js

import React from 'react';
import './RandomQuoteButton.css';

const RandomQuoteButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>Get Random Quote</button>
  );
};

export default RandomQuoteButton;
