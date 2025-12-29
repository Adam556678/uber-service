import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCordinatesDTO{
    @IsNumber()
    @IsNotEmpty()
    long: number;
    
    @IsNumber()
    @IsNotEmpty()
    lat: number;

    @IsString()
    @IsNotEmpty()
    rider: string;
}