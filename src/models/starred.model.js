import { TEXT, INTEGER } from "sequelize";
import { sequelize } from "../configs/db.config.js";

const Starred = sequelize.define("Starred", {
  starred_id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});
