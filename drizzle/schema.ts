import { pgTable, serial, text, foreignKey, integer } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const card = pgTable("card", {
	id: serial("id").primaryKey().notNull(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	groupName: text("group_name").notNull(),
});

export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	username: text("username").notNull(),
	firstName: text("first_name").notNull(),
	lastName: text("last_name").notNull(),
	email: text("email").notNull(),
	mobileNo: text("mobile_no").notNull(),
	profilePicture: text("profile_picture"),
	bio: text("bio"),
});

export const boardUsers = pgTable("board_users", {
	id: serial("id").primaryKey().notNull(),
	userId: integer("user_id").references(() => users.id),
	boardId: integer("board_id").references(() => boards.id),
	permissionLevel: text("permission_level"),
});

export const boards = pgTable("boards", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	background: text("background"),
});