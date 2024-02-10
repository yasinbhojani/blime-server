import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const demoTable = pgTable("demo_table", {
  id: serial("id").primaryKey().notNull(),
  demoName: text("demo_name").notNull(),
});

export const anotherDemo = pgTable("another_demo", {
  id: serial("id").primaryKey().notNull(),
  demoNameId: serial("demo_name_id")
    .notNull()
    .references(() => demoTable.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
});
