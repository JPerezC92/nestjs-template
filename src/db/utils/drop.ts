import { sql } from 'drizzle-orm';

import { db } from '@/db/conexion';

async function drop() {
	const tableSchema = db._.schema;

	if (!tableSchema) {
		throw new Error('No table schema found');
	}

	let queries = [sql.raw(`DROP SCHEMA IF EXISTS drizzle CASCADE`)];

	console.log('🗑️ Emptying the entire database');

	queries = [
		...queries,
		...Object.values(tableSchema).map(table => {
			console.log(`🧨 Preparing delete query for table: ${table.dbName}`);
			return sql.raw(`DROP TABLE IF EXISTS ${table.dbName};`);
		}),
	];

	console.log('🛜 Sending delete queries');

	await db.transaction(async tx => {
		await Promise.all(
			queries.map(async query => {
				if (query) await tx.execute(query);
			}),
		);
	});

	console.log('✅ Database emptied');
}

drop()
	.then(() => {
		process.exit(0);
	})
	.catch(() => {
		process.exit(1);
	});
