import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinate, RiderCoordinateSchema } from './schemas/rider-coordinates.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  // forRoot() → connects your app to MongoDB once
  // forFeature() → registers models (schemas) for a specific module

  imports: [
    // Mongoose Module
    MongooseModule.forFeature([{name: RiderCoordinate.name, schema: RiderCoordinateSchema}]),

    // communicating with rider service via TCP
    // Create a client object (ClientProxy) that knows how to talk TCP
    // and register it under the token RIDER_SERVICE.
    ClientsModule.register([ // create clients to other microservices (RIDER_SERVICE)
      // name --> is the token you will use to inject this client later
      {name: 'RIDER_SERVICE', transport: Transport.TCP}
    ])
  ],

  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService]
})
export class RiderCoordinatesModule {}
