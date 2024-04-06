import { faker } from '@faker-js/faker';
import * as crypto from 'crypto';

import { db } from '@/db/conexion';
import { usersDb } from '@/db/schemas';

export async function usersSeeder() {
	await db
		.insert(usersDb)
		.values([
			{
				id: crypto.randomUUID(),
				email: faker.internet.email(),
				password: faker.internet.password(),
				createdAt: faker.date.recent(),
				modifiedAt: faker.date.future(),
			},

			{
				id: crypto.randomUUID(),
				email: faker.internet.email(),
				password: faker.internet.password(),
				createdAt: faker.date.recent(),
				modifiedAt: faker.date.future(),
			},
			{
				id: crypto.randomUUID(),
				email: faker.internet.email(),
				password: faker.internet.password(),
				createdAt: faker.date.recent(),
				modifiedAt: faker.date.future(),
			},
		])
		.execute();
}
