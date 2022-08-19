const mongoose = require('mongoose');
const Task = require('../models/taskModel');

// get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// get a single task
const getTask = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw Error('Not a valid task id');
    }

    const task = await Task.findById(id);

    if (!task) {
      throw Error('No task found');
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// create a new task
const createTask = async (req, res) => {
  const { title, notes, priority, pinned, color } = req.body;

  try {
    const task = await Task.create({ title, notes, priority, pinned, color });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// update a task
const updateTask = (req, res) => {
  res.status(200).json('NOT IMPLEMENTED: update a task');
}

// delete a task
const deleteTask = (req, res) => {
  res.status(200).json('NOT IMPLEMENTED: delete a task');
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
}
