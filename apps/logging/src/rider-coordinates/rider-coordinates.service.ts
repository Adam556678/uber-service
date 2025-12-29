import { Injectable } from '@nestjs/common';
import { CreateCordinatesDTO } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate, RiderCoordinateDocument } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';

@Injectable()
export class RiderCoordinatesService {

    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly riderCoordinateModel : Model<RiderCoordinateDocument>
    ) {}

    async saveRiderCoordinates(createCoordinatesDTO: CreateCordinatesDTO) {
        return await this.riderCoordinateModel.create(createCoordinatesDTO);
    }

    async getRiderCoordinates(){
        return await this.riderCoordinateModel.find();
    }
}
