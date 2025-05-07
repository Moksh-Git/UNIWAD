const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

let items = [];
let idCounter = 1;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// CREATE
app.post('/create', (req, res) => {
  const item = { id: idCounter++, name: req.body.name };
  items.push(item);
  res.redirect('/');
});

// READ (HTML page serves the list)
app.get('/items', (req, res) => {
  res.json(items);
});

// UPDATE
app.post('/update', (req, res) => {
  const id = parseInt(req.body.id);
  const item = items.find(i => i.id === id);
  if (item) item.name = req.body.name;
  res.redirect('/');
});

// DELETE
app.post('/delete', (req, res) => {
  const id = parseInt(req.body.id);
  items = items.filter(i => i.id !== id);
  res.redirect('/');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
