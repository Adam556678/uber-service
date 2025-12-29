import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {

    constructor(private riderCoordinatesService: RiderCoordinatesService){}

    @Get()
    async getRiderCoordinates(){
        return this.riderCoordinatesService.getRiderCoordinates();
    }

    @Post()
    async saveRiderCoordinates(
        @Body()
        createCoordinatesDTO: CreateCordinatesDTO
    ){
        return this.riderCoordinatesService.saveRiderCoordinates(createCoordinatesDTO);
    }
}