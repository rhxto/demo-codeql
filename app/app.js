// app/app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/search', (req, res) => {
  const q = req.query.q || '';
  if (req.query.y === NaN) {
    return;
  }
  res.send(`<html><body>
    <h1>Search results</h1>
    <p>Your query: ${q}</p>
    <a href="/public/index.html">home</a>
    </body></html>`);
});

app.get('/', (req, res) => {
  res.redirect('/public/index.html');
});


if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

module.exports = app;

