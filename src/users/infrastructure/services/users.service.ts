import { ConflictException, Injectable } from '@nestjs/common';

import { db } from '@/db/conexion';
import { DomainError } from '@/shared/domain';
import { mapExceptionToHttpError } from '@/shared/infrastructure/errors';
import { UserCreator } from '@/users/application';
import { UserEmailAlreadyRegisteredError } from '@/users/domain';
import { userModelToEndpoint } from '@/users/infrastructure/adapters';
import { prdUserRepository } from '@/users/infrastructure/repositories';
import type * as userSchemas from '@/users/infrastructure/schemas';

@Injectable()
export class UsersService {
	async create(
		userCreateDto: userSchemas.UserCreateDto,
	): Promise<userSchemas.UserEndpointDto> {
		const result = await db.transaction(
			async db =>
				await UserCreator(
					prdUserRepository(db),
					userModelToEndpoint,
				).exec(userCreateDto),
		);

		if (!DomainError.isInstance(result)) return result;

		const httpError = mapExceptionToHttpError([
			[UserEmailAlreadyRegisteredError.name, ConflictException],
		]).find(result);

		throw httpError();
	}
}
