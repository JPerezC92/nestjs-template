import { DomainError } from '@/shared/domain';

export class UserEmailAlreadyRegisteredError extends DomainError {
	readonly code = 'USER_EMAIL_ALREADY_REGISTERED';
	readonly name = UserEmailAlreadyRegisteredError.name;
	readonly message: string;

	constructor(email?: string) {
		super();
		this.message = email
			? `User with email ${email} already exists`
			: 'Email already In Use';
	}

	static isInstance(
		error: unknown,
	): error is UserEmailAlreadyRegisteredError {
		return error instanceof UserEmailAlreadyRegisteredError;
	}
}
