import express from "express";
import dotenv from "dotenv";

import { query } from "./configs/db.config.js";

//^ Routers
import demoRouter from "./routes/demo-route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

//^ Routes
app.use("/api/demo", demoRouter);

app.get("/", async (req, res) => {
  try {
    res.json({ message: "Server is Running" });
    const data = await query("select * from sample where id=$1", [1]);
    console.log(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", error });
  }
  res.json({ message: "Server is Running" });
});

app.listen(port, () => {
  console.log(
    `server started on port http://127.0.0.1:${port} or http://localhost:${port}`
  );
});
