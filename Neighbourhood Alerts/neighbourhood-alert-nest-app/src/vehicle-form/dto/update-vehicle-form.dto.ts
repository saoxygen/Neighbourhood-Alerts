import {IsString} from 'class-validator';
import {VehicleStatus} from '../enums/vehicle.enums'

export class UpdateVehicleFormDto {
    @IsString() vehicleStatus: VehicleStatus;
    @IsString() customDescription: string;
}   
