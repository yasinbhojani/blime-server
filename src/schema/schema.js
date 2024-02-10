import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const countries = pgTable("countries", {
  id: serial("id").notNull().primaryKey(),
  iso: text("iso").notNull(),
  locale: text("locale"),
  name: text("name").notNull(),
  nick_name: text("nick_name"),
  phone_code: text("phone_code").notNull(),
  flag: text("flag"),
});

export const billing = pgTable("billing", {
  id: serial("id").notNull().primaryKey(),
});

export const users = pgTable("users", {
  id: serial("id").notNull().primaryKey(),
  username: text("username").notNull(),
  first_name: text("first_name").notNull(),
  last_name: text("last_name"),
  email_id: text("email_id").notNull().unique(),
  country_id: serial("country_id")
    .references(() => countries.id)
    .notNull(),
  password: text("password").notNull(),
  profile_image: text("profile_image"),
  mode_of_signup: text("mode_of_signup").default(""),
  role: text("role").default("user"),
  two_factor_recovery_code: text("two_factor_recovery_code").notNull(),
  dark_theme: boolean("dark_theme").default(false).notNull(),
  admin_approval: boolean("admin_approval").default(true).notNull(),
  is_active: boolean("is_active").default(true).notNull(),
  remember_token: text("remember_token").default("").notNull(),
  trial_end_time: timestamp("trial_end_time"),
  billing_id: integer("billing_id").references(() => billing.id),
  email_notification: boolean("email_notification").notNull().default(true),
  gender: text("gender").default("male"),
  tow_factor_auth: boolean("tow_factor_auth").default(false),
  otp_id: text("otp_id").unique(),
});
