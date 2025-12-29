import { Inject, Injectable } from '@nestjs/common';
import { CreateCordinatesDTO } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate, RiderCoordinateDocument } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {

    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly riderCoordinateModel : Model<RiderCoordinateDocument>,
        // We use ClientProxy so:
        //  • No direct imports
        //  • No shared memory
        //  • No function calls
        @Inject('RIDER_SERVICE') private client : ClientProxy
    ) {}

    async saveRiderCoordinates(createCoordinatesDTO: CreateCordinatesDTO) {
        return await this.riderCoordinateModel.create(createCoordinatesDTO);
    }

    async getRiderCoordinates(riderId: string){
        const coordinates =  await this.riderCoordinateModel.find({rider: riderId});

        const pattern = {cmd: 'get-rider'}; // calls the get-rider in the rider microservice
        const payload = {id: riderId};
        // firstValueFrom(observable) converts an Observable 
        // into a Promise that resolves with the FIRST emitted value.
        // MEANS: Wait for the first response, then stop listening.
        const rider = await firstValueFrom(this.client.send(pattern, payload));

        return {coordinates, rider};
    }
}
