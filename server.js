const express = require('express');
const path = require('path');
const logger = require('morgan');
const router = require('./routes');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(router)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });