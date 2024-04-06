import { migrate } from 'drizzle-orm/postgres-js/migrator';

import { db, queryClient } from '@/db/conexion';

// This will run migrations on the database, skipping the ones already applied
migrate(db, { migrationsFolder: './drizzle' })
	.then(() => console.log('Migrations applied successfully'))
	// Don't forget to close the connection, otherwise the script will hang
	.then(async () => await queryClient.end())
	.catch(console.error);
