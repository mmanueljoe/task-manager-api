export class AppError extends Error {
  readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
  }

  static notFound(message = "Resource not found") {
    return new AppError(message, 404);
  }

  static badRequest(message: string) {
    return new AppError(message, 400);
  }
}
