import { type Request, type Response } from "express";
import { TASK_DATA as tasks } from "../data/tasks.js";
import { v4 as uuidv4 } from "uuid";
import { type Task } from "../types/types.js";

const getAllTasks = (_req: Request, res: Response) => {
  return res.status(200).json(tasks);
};

const getTaskById = (req: Request, res: Response) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  return res.status(200).json(task);
};

const createTask = (req: Request, res: Response) => {
  const newTask = req.body;

  if (!newTask.title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = {
    id: uuidv4(),
    title: newTask.title,
    description: newTask.description ?? "",
    completed: false,
    priority: newTask.priority ?? "low",
  };

  tasks.push(task);

  return res.status(201).json({ task, message: "Task created successfully" });
};




const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, completed, priority } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  const validPriorities = ["low", "medium", "high"];

  if (priority !== undefined && !validPriorities.includes(priority)) {
    return res
      .status(400)
      .json({ message: "Priority must be low, medium, or high" });
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({ message: "Completed must be a boolean" });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...(title !== undefined && { title }),
    ...(description !== undefined && { description }),
    ...(completed !== undefined && { completed }),
    ...(priority !== undefined && { priority }),
  } as Task;

  return res.status(200).json({ message: "Task updated successfully" });
};


const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(taskIndex, 1);

  return res.status(200).json({ message: "Task deleted successfully" });
};


export {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
