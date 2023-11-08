// src/components/AuthorSearch.js

import React, { useState } from 'react';
import './AuthorSearch.css';

const AuthorSearch = ({ onSearch }) => {
  const [author, setAuthor] = useState('');

  const handleSearch = () => {
    onSearch(author);
  };

  return (
    <div className="author-search">
      <input
        type="text"
        placeholder="Enter author's name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleSearch}>Search by Author</button>
    </div>
  );
};

export default AuthorSearch;
