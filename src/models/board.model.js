import { DataTypes } from "sequelize";
import { sequelize } from "../configs/db.config.js";
import Workspace from "./workspace.model.js";

const Board = sequelize.define(
  "Board",
  {
    board_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    board_name: { type: DataTypes.TEXT, allowNull: false },
    background: { type: DataTypes.TEXT, allowNull: false },
  },
  { timestamps: true }
);

Board.belongsTo(Workspace, {
  foreignKey: {
    name: "workspace_id",
    allowNull: true,
  },
});

export default Board;
