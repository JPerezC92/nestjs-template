import type { UsersDb } from '@/db/schemas';
import { User } from '@/users/domain';

export function userDbToDomain(user: UsersDb): User {
	return new User({
		id: user.id,
		email: user.email,
		password: user.password,
		createdAt: user.createdAt,
		modifiedAt: user.modifiedAt,
	});
}
