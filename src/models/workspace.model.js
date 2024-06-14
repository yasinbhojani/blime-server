import { DataTypes } from "sequelize";
import { sequelize } from "../configs/db.config.js";
import User from "./users.model.js";

const Workspace = sequelize.define(
  "Workspace",
  {
    workspace_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    workspace_name: { type: DataTypes.TEXT, allowNull: false },
  },
  { timestamps: true }
);

Workspace.belongsTo(User, {
  foreignKey: {
    name: "user_id",
    allowNull: true,
  },
});

export default Workspace;
