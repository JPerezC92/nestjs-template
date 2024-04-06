import { faker } from '@faker-js/faker';

import { User } from '@/users/domain';

export const UserMother = {
	create(params?: Partial<User>): User {
		return new User({
			id: faker.string.uuid(),
			email: faker.internet.email(),
			password: faker.internet.password(),
			createdAt: new Date(),
			modifiedAt: new Date(),
			...params,
		});
	},
};
