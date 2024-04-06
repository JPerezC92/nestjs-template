import 'dotenv/config';

import type { Config } from 'drizzle-kit';

import { projectPrefix } from '@/shared/infrastructure/utils';

export default {
	schema: 'src/db/schemas/*',
	out: 'drizzle',
	driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
	dbCredentials: {
		host: String(process.env.DATABASE_HOST),
		port: Number(process.env.DATABASE_PORT),
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		database: String(process.env.DATABASE_NAME),
	},
	tablesFilter: [`${projectPrefix}*`],
} satisfies Config;
