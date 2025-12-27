import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCordinatesDTO{
    @IsNumber()
    @IsNotEmpty()
    lng: number;
    
    @IsNumber()
    @IsNotEmpty()
    lat: number;

    @IsString()
    @IsNotEmpty()
    rider: string;
}