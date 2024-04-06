import { db } from '@/db/conexion';
import { usersSeeder } from '@/db/seeders';

async function seed() {
	const tableSchema = db._.schema;

	if (!tableSchema) {
		throw new Error('No table schema found');
	}

	await usersSeeder();

	console.log('✅ Database seeded');
}

seed()
	.then(() => {
		process.exit(0);
	})
	.catch(() => {
		process.exit(1);
	});
