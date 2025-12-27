import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCordinatesDTO } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCoordinates(){
        return "Hello, getRiderCoordinates()";
    }

    @Post()
    saveRiderCoordinates(
        @Body()
        createCoordinatesDTO: CreateCordinatesDTO
    ){
        return createCoordinatesDTO;
    }
}