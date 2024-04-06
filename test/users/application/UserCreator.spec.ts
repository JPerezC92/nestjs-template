import { mock } from 'jest-mock-extended';

import { UserMother } from '@/test/users/domain';
import { UserCreator } from '@/users/application';
import {
	User,
	UserEmailAlreadyRegisteredError,
	type UsersRepository,
} from '@/users/domain';

const mockUsersRepository = mock<UsersRepository>();

describe('UserCreator', () => {
	it('should create a new user', async () => {
		// GIVEN
		const newUser = UserMother.create();

		const userNewProps = {
			email: newUser.email,
			password: newUser.password,
		};

		// WHEN
		const result = await UserCreator(
			mockUsersRepository,
			result => result,
		).exec(userNewProps);

		// THEN
		expect(result).toBeInstanceOf(User);
	});

	it('should throw an error if the user already exists', async () => {
		// GIVEN
		const newUser = UserMother.create();
		mockUsersRepository.findByEmail.mockResolvedValue(newUser);
		const userNewProps = {
			email: newUser.email,
			password: newUser.password,
		};

		// WHEN
		const result = await UserCreator(
			mockUsersRepository,
			result => result,
		).exec(userNewProps);

		// THEN
		expect(result).toBeInstanceOf(UserEmailAlreadyRegisteredError);
	});
});
