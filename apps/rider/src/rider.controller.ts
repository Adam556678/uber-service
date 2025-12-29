import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  // @Get(':id')
  @MessagePattern({cmd: "get-rider"})
  async getRiderByID(payload: {id: string}) {
    return {
      id: payload.id,
      firstName: "John",
      lastName: "Doe",
      email: "John@gmail.com"
    }
  }
}
