import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes/index.js";
import { sequelize } from "./configs/db.config.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));

app.use("/api", router);

// this will make sure to sync the database and then will start the server.
sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}.`);
    });
  })
  .catch((err) => console.log(err));
