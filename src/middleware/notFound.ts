import { type Request, type Response, type NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

export const notFoundHandler = (req: Request, _res: Response, next: NextFunction): void => {
  next(AppError.notFound(`Route not found: ${req.method} ${req.originalUrl}`));
};
