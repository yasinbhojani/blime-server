import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

//^ routes
import authRouter from "./routes/auth.js";

const app = express();
const port = process.env.PORT || 8080;

//^ body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//^ morgan
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

//^ cors
app.use(cors({ origin: "*" }));

//^ routes
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`[server]: server started on port http://127.0.0.1:${port} or http://localhost:${port}`);
});
