import pkg from "pg";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

const { Pool } = pkg;
dotenv.config();

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

export const query = (text, params) => pool.query(text, params);

const db = drizzle(pool);
export default db;
