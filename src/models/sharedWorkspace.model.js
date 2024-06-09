import { sequelize } from "../configs/db.config.js";
import Workspace from "./workspace.model.js";

const SharedWorkspace = sequelize.define("SharedWorkspace", { timestamps: true });

SharedWorkspace.belongsTo(Workspace, {
  foreignKey: [
    {
      name: "workspace_id",
      allowNull: true,
    },
    {
      name: "user_id",
      allowNull: true,
    },
  ],
});

export default User;
