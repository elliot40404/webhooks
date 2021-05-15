'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
app.use(express.json());
const Git = require('./utils/hook');
const mongoose = require('mongoose');

//  * DB

const uri = process.env.NODE_ENV === 'production' ? process.env.MONGO_URL: "mongodb://localhost/git"
mongoose.connect(uri, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}, () => { console.log('connected to db') });

//  * routes

app.post('/db/githook', async (req, res) => {
  const hook = new Git();
  hook.repository = await req.body.repository;
  hook.commit = await req.body.commit;
  hook.author = await req.body.author;
  hook.url = await req.body.url;
  await hook.save();
  res.sendStatus(201)
});

const handler = serverless(app)

module.exports = { handler }
