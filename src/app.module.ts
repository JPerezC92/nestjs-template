import { Module } from '@nestjs/common';

import { UsersModule } from '@/users/infrastructure/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [UsersModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
