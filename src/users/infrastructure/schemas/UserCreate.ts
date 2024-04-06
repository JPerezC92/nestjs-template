import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const UserCreate = extendApi(
	z.object({
		email: z.string().email(),
		password: z.string().min(1).max(50),
	}),
	{
		title: 'UserCreate',
		description: 'A new user',
	},
);

export class UserCreateDto extends createZodDto(UserCreate) {}
