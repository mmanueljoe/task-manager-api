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
import { createTaskSchema, updateTaskSchema } from "../validations/task.validation.js";
import type { ZodError } from "zod";

const formatZodError = (error: ZodError): string =>
  error.issues
    .map((issue) => (issue.path.length > 0 ? `${issue.path.join(".")}: ${issue.message}` : issue.message))
    .join("; ");

const getAllTasks = (_req: Request, res: Response): Response => {
  return sendSuccess(res, 200, findAllTasks());
};

const getTaskById = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { id } = req.params as { id: string };
  const task = findTaskById(id);

  if (!task) {
    return next(AppError.notFound("Task not found"));
  }

  return sendSuccess(res, 200, task);
};

const createTask = (req: Request, res: Response, next: NextFunction): Response | void => {
  const result = createTaskSchema.safeParse(req.body);

  if (!result.success) {
    return next(AppError.badRequest(formatZodError(result.error)));
  }

  const task = insertTask(result.data);
  return sendSuccess(res, 201, task, "Task created successfully");
};

const updateTask = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { id } = req.params as { id: string };
  const result = updateTaskSchema.safeParse(req.body);

  if (!result.success) {
    return next(AppError.badRequest(formatZodError(result.error)));
  }

  const updatedTask = modifyTask(id, result.data);

  if (!updatedTask) {
    return next(AppError.notFound("Task not found"));
  }

  return sendSuccess(res, 200, updatedTask, "Task updated successfully");
};

const deleteTask = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { id } = req.params as { id: string };
  const deleted = deleteTaskById(id);

  if (!deleted) {
    return next(AppError.notFound("Task not found"));
  }

  return sendSuccess(res, 200, undefined, "Task deleted successfully");
};

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
