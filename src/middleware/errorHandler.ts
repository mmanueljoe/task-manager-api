import { type Request, type Response, type NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err instanceof AppError ? err.message : "Internal server error";

  if (statusCode === 500) {
    console.error(err.stack);
  }

  res.status(statusCode).json({ success: false, message });
};
