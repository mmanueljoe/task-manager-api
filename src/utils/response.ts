import { type Response } from "express";
import { type SuccessResponse } from "../types/types.js";

export const sendSuccess = <T>(
  res: Response,
  statusCode: number,
  data?: T,
  message?: string
): Response => {
  const body: SuccessResponse<T> = { success: true };

  if (data !== undefined) {
    body.data = data;
  }

  if (message !== undefined) {
    body.message = message;
  }

  return res.status(statusCode).json(body);
};
