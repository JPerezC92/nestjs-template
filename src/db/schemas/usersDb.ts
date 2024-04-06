import { timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

import { pgTable } from '@/db/conexion';

export const usersDb = pgTable('users', {
	id: uuid('id').primaryKey(),
	password: varchar('password', { length: 60 }).notNull(),
	email: varchar('email', { length: 150 }).unique().notNull(),
	createdAt: timestamp('created_at').notNull(),
	modifiedAt: timestamp('modified_at').notNull(),
});

export type UsersDb = typeof usersDb.$inferSelect;
