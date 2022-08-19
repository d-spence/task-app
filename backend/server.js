const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const tasksRoutes = require('./routes/tasks');

require('dotenv').config(); // load .env contents into process.env

// express app init
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(chalk.gray(req.method, req.path)); // log requests
  next();
});

// routes
app.use('/api/tasks', tasksRoutes);

const appListen = () => {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(chalk.green.bold.underline(`Server listening on port ${PORT}`));
  });
}

// connect to db
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

// db connection event handlers
db.on('connected', () => {
  console.log(chalk.blue.bold.underline('Connection to database established'));
  appListen();
});
db.on('error', (error) => console.log(chalk.red(error)));
