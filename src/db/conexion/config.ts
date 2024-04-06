import { pgTableCreator } from 'drizzle-orm/pg-core';

import { projectPrefix } from '@/shared/infrastructure/utils';

export const pgTable = pgTableCreator(name => `${projectPrefix}${name}`);
