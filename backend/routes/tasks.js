const express = require('express');
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasksController');

const router = express.Router();

// GET all tasks
router.get('/', getAllTasks);

// GET a single task
router.get('/:id', getTask);

// POST a new task
router.post('/', createTask);

// UPDATE a task
router.patch('/:id', updateTask);

// DELETE a task
router.delete('/:id', deleteTask);

module.exports = router;
