// Create web server
// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Fake comments data
const comments = [
  { id: 1, author: 'John', text: 'Hello World' },
  { id: 2, author: 'Jane', text: 'Hi, there!' }
];

// API endpoint to get comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// API endpoint to add comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comment.id = comments.length + 1;
  comments.push(comment);
  res.send(comment);
});

// Start server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});