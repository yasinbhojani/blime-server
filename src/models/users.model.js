import { DataTypes } from "sequelize";
import { sequelize } from "../configs/db.config.js";

const Users = sequelize.define("Users", {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  user_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  first_name: { type: DataTypes.TEXT, allowNull: false },
  last_name: { type: DataTypes.TEXT, allowNull: false },
  email: { type: DataTypes.TEXT, allowNull: false },
  password: { type: DataTypes.TEXT, allowNull: false },
});

// Users.sync({ alter: true });
// Users.sync();
export default Users;
