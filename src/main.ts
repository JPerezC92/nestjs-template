import { patchNestjsSwagger } from '@anatine/zod-nestjs';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle('Api example')
		.setDescription('The API description')
		.setVersion('1.0')
		.build();

	patchNestjsSwagger();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, { ...document, openapi: '3.1.0' });

	await app.listen(8000);
}

bootstrap().catch(console.error);
