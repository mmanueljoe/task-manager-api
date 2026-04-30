import express from "express";
import { configDotenv } from "dotenv";
import taskRouter from "./routes/tasks.routes.js";
import { logRequest } from "./middleware/logger.js";
import { notFoundHandler } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

configDotenv();

const PORT = process.env["PORT"] ?? 3000;

const app: express.Application = express();

app.use(express.json());
app.use(logRequest);

app.use("/api/tasks", taskRouter);

// 404 handler
app.use(notFoundHandler);

// global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
