const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
})

app.get('/books', (req, res) => {
  res.sendFile(__dirname + '/views/books.html')
})

app.listen(3000, () => {
  console.log('running..');
})