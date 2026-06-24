import { type Request, type Response, type NextFunction } from "express";
import {
  findAllTasks,
  findTaskById,
  insertTask,
  modifyTask,
  deleteTaskById,
} from "../models/task.model.js";
import { AppError } from "../utils/AppError.js";
import { sendSuccess } from "../utils/response.js";

const allowedPriorities = new Set(["low", "medium", "high"]);

const getAllTasks = (_req: Request, res: Response): Response => {
  return sendSuccess(res, 200, findAllTasks());
};

const getTaskById = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { id } = req.params;

  if (typeof id !== "string") {
    return next(new AppError("Task not found", 404));
  }

  const task = findTaskById(id);

  if (!task) {
    return next(new AppError("Task not found", 404));
  }

  return sendSuccess(res, 200, task);
};

const createTask = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { title, description, priority } = req.body;

  if (!title) {
    return next(new AppError("Title is required", 400));
  }

  if (priority !== undefined && !allowedPriorities.has(priority)) {
    return next(new AppError("Priority must be low, medium, or high", 400));
  }

  const task = insertTask({ title, description, priority });
  return sendSuccess(res, 201, task, "Task created successfully");
};

const updateTask = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { id } = req.params;
  const { title, description, completed, priority } = req.body;

  if (typeof id !== "string") {
    return next(new AppError("Task not found", 404));
  }

  if (priority !== undefined && !allowedPriorities.has(priority)) {
    return next(new AppError("Priority must be low, medium, or high", 400));
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    return next(new AppError("Completed must be a boolean", 400));
  }

  const updatedTask = modifyTask(id, { title, description, completed, priority });

  if (!updatedTask) {
    return next(new AppError("Task not found", 404));
  }

  return sendSuccess(res, 200, updatedTask, "Task updated successfully");
};

const deleteTask = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { id } = req.params;

  if (typeof id !== "string") {
    return next(new AppError("Task not found", 404));
  }

  const deleted = deleteTaskById(id);

  if (!deleted) {
    return next(new AppError("Task not found", 404));
  }

  return sendSuccess(res, 200, undefined, "Task deleted successfully");
};

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
