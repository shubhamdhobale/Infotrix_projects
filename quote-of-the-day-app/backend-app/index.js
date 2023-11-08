// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Define your routes
const usersRoute = require('./routes/users');
const quotesRoute = require('./routes/quotes');

app.use('/users', usersRoute);
app.use('/quotes', quotesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
