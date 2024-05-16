import express from "express";
import Users from "./models/users.model.js";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

import authRouter from "./routes/auth.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.use(cors({ origin: "*" }));

app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
