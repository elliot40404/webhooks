'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
app.use(express.json())

const num = () => {
  return Math.floor(Math.random() * 100 / 2);
}

app.get('/api/data', (req, res) => {
  res.send({ a: num(), b: num(), c: num() });
});

const handler = serverless(app)

module.exports = { handler }
