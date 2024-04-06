import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

import type { errorResponseSchema } from './errorResponse.schema';

const internalServerErrorResponseSchema = extendApi<typeof errorResponseSchema>(
	z.object({
		statusCode: z.number().describe('number'),
		message: z.string(),
		code: z.string(),
	}),
	{
		title: 'InternalServerErrorResponse',
		description: 'Internal server error response',
		example: {
			statusCode: 500,
			message: 'Internal server error',
			code: 'INTERNAL_SERVER_ERROR',
		},
	},
);

export class InternalServerErrorResponse extends createZodDto(
	internalServerErrorResponseSchema,
) {}
