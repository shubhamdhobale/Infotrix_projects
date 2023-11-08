// src/components/QuoteDisplay.js

import React, { useState, useEffect } from 'react';
import RandomQuoteButton from './RandomQuoteButton';
import AuthorSearch from './AuthorSearch';
import './QuoteDisplay.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';


const QuoteDisplay = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  const getCurrentDate = () => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching quotes: ' + error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (quotes.length > 0) {
      // Select a random quote from the fetched quotes
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex].text);
    }
  }, [quotes]);
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex].text);
  };


  const searchByAuthor = (authorName) => {
    const quotesByAuthor = quotes.filter(
      (quote) => quote.author && quote.author.toLowerCase().includes(authorName.toLowerCase())
    );

    if (quotesByAuthor.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotesByAuthor.length);
      setRandomQuote(quotesByAuthor[randomIndex].text);
    } else {
      setRandomQuote('No quotes found for the specified author.');
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

 
  return (
    <div className="quote-display">
      <h2>Quote of the Day</h2>
      <span className="current-date">{getCurrentDate()}</span>
   
      <AuthorSearch onSearch={searchByAuthor} />
      <RandomQuoteButton onClick={getRandomQuote} />
      <p>{randomQuote}</p>
      <button >Save the Quote</button>
    </div>
  );
};

export default QuoteDisplay;
