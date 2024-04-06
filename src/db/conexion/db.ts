import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from '@/db/schemas';

export const queryClient = postgres({
	host: process.env.DATABASE_HOST,
	port: Number(process.env.DATABASE_PORT),
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
});

export const db = drizzle(queryClient, { schema });

export type Db = typeof db;
