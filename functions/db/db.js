'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
app.use(express.json());
const Git = require('./utils/hook');
const mongoose = require('mongoose');
//  * DB
const uri = "mongodb+srv://elliot:8JfTTEIVNpYU80pw@cluster0.m0gkv.mongodb.net/git?retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}, () => { console.log('⚡ connected to db') });

//  * routes

app.post('/db/githook', async (req, res) => {
  const data = await req.body;
  const hook = new Git();
  hook.repository = data.repository.name
  hook.commit = data.commits[0].message;
  hook.author = data.commits[0].author.name;
  hook.url = data.repository.owner.avatar_url;
  hook.private = data.repository.private
  await hook.save();
  res.sendStatus(201)
});

const handler = serverless(app)

module.exports = { handler }