import { NestFactory } from '@nestjs/core';
import { RiderModule } from './rider.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(RiderModule);

  // Here, this microservice (Rider) doesn't expose a REST API
  // it only responds to messages
  // it's called via ClientProxy.send()
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RiderModule,
    {
      transport: Transport.TCP
    }
  )
  await app.listen();
}
bootstrap();
