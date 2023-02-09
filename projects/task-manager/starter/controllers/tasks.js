const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async.js");
const { createCustomError } = require("../errors/custom-error.js");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    createCustomError(`No task with id: ${taskID}`, 404);
    // always make sure to have the return, or else it will send both responses
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }

  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    createCustomError(`No task with id: ${taskID}`, 404);
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    createCustomError(`No task with id: ${taskID}`, 404);
  }

  res.status(200).json({ task });
  // normally, you don't need to send back the task you're deleting
  // so the method below is much more common
  // res.status(200).json({ task: null, status: "success" });
});

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
