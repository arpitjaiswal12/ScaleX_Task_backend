import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());

// Importing routers

import pairRouter from "./routes/pair.routes.js";

app.use("/api/v1", pairRouter);

export { app };
