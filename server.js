require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

app.listen(process.env.PORT, (err) => {
  try {
    console.log(`Server is listening on port: ${process.env.PORT}`)
  } catch (err) {
    console.error(err)
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html'))
})
