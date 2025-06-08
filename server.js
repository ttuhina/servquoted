// server.js
const express = require('express');
const app = express();
const quotes = require('./quotes');

const PORT = 3000;

app.use(express.static('public'));

app.get('/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
