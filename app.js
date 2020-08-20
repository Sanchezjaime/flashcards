const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>test test test</h1>');
});

app.get('/hello', (req, res) => {
  res.send('<h1>Hello, Javascript Developer!</h1>');
});

app.listen(3000, () => {
  console.log('this application is running on localhost:3000!')
});
