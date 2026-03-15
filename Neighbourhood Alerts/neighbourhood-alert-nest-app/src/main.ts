import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe ({
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
    whitelist: true,
  }))

  app.enableCors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'https://your-production-app.com'],
  credentials: true,
});

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
