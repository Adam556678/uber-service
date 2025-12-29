import { NestFactory } from '@nestjs/core';
import { LoggingModule } from './logging.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(LoggingModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips (remove) unknown fields (outside the DTO)
      forbidNonWhitelisted: true, // therowing an error in case of unnknown fields
      transform: true // Converts incoming JSON into your DTO classes
    })
  )

  await app.listen(process.env.port ?? 3002);
}
bootstrap();
