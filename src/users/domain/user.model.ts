import * as crypto from 'node:crypto';

interface UserProps {
	id: string;
	email: string;
	password: string;
	createdAt: Date;
	modifiedAt: Date;
}

export type UserNewProps = Pick<UserProps, 'email' | 'password'>;

export class User {
	public readonly id: string;
	public readonly email: string;
	public readonly password: string;
	public readonly createdAt: Date;
	public readonly modifiedAt: Date;

	constructor(props: UserProps) {
		this.id = props.id;
		this.email = props.email;
		this.password = props.password;
		this.createdAt = props.createdAt;
		this.modifiedAt = props.modifiedAt;
	}

	static new(props: UserNewProps): User {
		return new User({
			id: crypto.randomUUID(),
			email: props.email,
			password: props.password,
			createdAt: new Date(),
			modifiedAt: new Date(),
		});
	}

	static isInstance(obj: unknown): obj is User {
		return obj instanceof User;
	}
}
