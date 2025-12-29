import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {

    constructor(private riderCoordinatesService: RiderCoordinatesService){}

    @Get(':id')
    async getRiderCoordinates(
        @Param('id') id : string
    ){
        return this.riderCoordinatesService.getRiderCoordinates(id);
    }

    @Post()
    async saveRiderCoordinates(
        @Body()
        createCoordinatesDTO: CreateCordinatesDTO
    ){
        return this.riderCoordinatesService.saveRiderCoordinates(createCoordinatesDTO);
    }
}