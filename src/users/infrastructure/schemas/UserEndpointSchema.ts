import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

import * as sharedSchemas from '@/shared/infrastructure/schemas';

export const UserEndpointSchema = extendApi(
	z
		.object({
			id: z.string().uuid(),
			email: z.string().email(),
		})
		.merge(sharedSchemas.timestampSchema),
	{
		title: 'User',
		description: 'A new user',
	},
);

export class UserEndpointDto extends createZodDto(UserEndpointSchema) {}
