import { pgTable, serial, text, json } from "drizzle-orm/pg-core";

export const demoTable = pgTable("demo_table", {
  id: serial("id").primaryKey().notNull(),
  demoName: text("demo_name").notNull(),
});

export const sohamTable = pgTable("soham_table", {
  id: serial("id").primaryKey().notNull(),
  sohamName: text("soham_name", { enum: ["soham", "ganmote"] })
    .notNull()
    .unique(),
  jsonSoham: json("json_soham").default({ soham: "name" }),
});
