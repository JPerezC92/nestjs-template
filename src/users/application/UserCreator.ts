import type { UserNewProps, UsersRepository } from '@/users/domain';
import { User, UserEmailAlreadyRegisteredError } from '@/users/domain';

export function UserCreator<UseCaseResult>(
	usersRepository: UsersRepository,
	resultAdapter: (result: User) => UseCaseResult,
) {
	return {
		exec: async (props: UserNewProps) => {
			const userExists = await usersRepository.findByEmail(props.email);

			if (userExists) {
				return new UserEmailAlreadyRegisteredError(props.email);
			}

			const user = User.new(props);

			await usersRepository.save(user);

			return resultAdapter(user);
		},
	};
}
