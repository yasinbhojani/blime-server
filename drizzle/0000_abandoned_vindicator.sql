-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "demo_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"demo_name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "another_demo" (
	"id" serial PRIMARY KEY NOT NULL,
	"demo_name_id" serial NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "another_demo" ADD CONSTRAINT "another_demo_demo_name_id_demo_table_id_fk" FOREIGN KEY ("demo_name_id") REFERENCES "demo_table"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/