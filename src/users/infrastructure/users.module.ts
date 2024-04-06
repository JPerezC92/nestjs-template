import { Module } from '@nestjs/common';

import { UsersService } from '@/users/infrastructure/services';

import { UsersController } from './users.controller';

@Module({
	controllers: [UsersController],
	providers: [UsersService],
})
export class UsersModule {}
