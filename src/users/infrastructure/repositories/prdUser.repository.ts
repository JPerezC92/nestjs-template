import type { Db } from '@/db/conexion';
import { usersDb } from '@/db/schemas';
import type { UsersRepository } from '@/users/domain';
import { userDbToDomain } from '@/users/infrastructure/adapters';

export function prdUserRepository(db: Db): UsersRepository {
	return {
		async save(user) {
			await db
				.insert(usersDb)
				.values({
					id: user.id,
					email: user.email,
					password: user.password,
					createdAt: user.createdAt,
					modifiedAt: user.modifiedAt,
				})
				.execute();
		},

		async findByEmail(email) {
			const result = await db.query.usersDb.findFirst({
				where: (users, { eq }) => eq(users.email, email),
			});

			if (!result) return null;

			return userDbToDomain(result);
		},
	};
}
