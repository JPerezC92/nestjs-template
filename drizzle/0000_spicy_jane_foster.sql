CREATE TABLE IF NOT EXISTS "project1_users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"password" varchar(60) NOT NULL,
	"email" varchar(150) NOT NULL,
	"created_at" timestamp NOT NULL,
	"modified_at" timestamp NOT NULL,
	CONSTRAINT "project1_users_email_unique" UNIQUE("email")
);
