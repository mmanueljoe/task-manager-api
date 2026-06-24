import "dotenv/config";
import express from "express";
import taskRouter from "./routes/tasks.routes.js";
import { logRequest } from "./middleware/logger.js";
import { notFoundHandler } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app: express.Application = express();
app.disable("x-powered-by");

app.use(express.json());
app.use(logRequest);

app.use("/api/tasks", taskRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
