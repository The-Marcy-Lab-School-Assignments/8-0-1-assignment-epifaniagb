const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const logRoute = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
};

app.use(express.static(path.join(__dirname, '../dist')));

app.use(logRoute);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index,html'));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
