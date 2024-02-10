/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/schema/schema.js",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  },
  verbose: true,
  strict: true,
};
