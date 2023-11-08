const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();

// Connect to your MongoDB database (replace 'your-database-uri' with your actual database URI)
mongoose.connect('mongodb://your-database-uri', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static('public'));

app.use(express.json());

// Define a User model
const User = mongoose.model('User', {
  username: String,
  password: String,
});

// Registration route
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const user = new User({
      username,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).send('User registered successfully.');
  } catch (error) {
    res.status(500).send('Registration failed.');
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send('User not found.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password); // Compare passwords

    if (isPasswordValid) {
      res.status(200).send('Login successful.');
    } else {
      res.status(401).send('Invalid password.');
    }
  } catch (error) {
    res.status(500).send('Login failed.');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
