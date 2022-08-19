const express = require('express');
const chalk = require('chalk');
const tasksRoutes = require('./routes/tasks');

require('dotenv').config(); // load .env contents into process.env

// express app init
const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/tasks', tasksRoutes);

app.use((req, res, next) => {
  console.log(chalk.bold(req.method, req.path)); // log requests
  next();
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(chalk.green.bold.underline(`Server listening on port ${PORT}`));
});
