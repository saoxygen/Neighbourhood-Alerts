import {IsNumber, IsString, Length, IsDate, IsBoolean} from 'class-validator';
import { RemoveSpaces } from 'src/transforms/remove-spaces.transform';
import {VehicleCondition, VehicleType, VehicleStatus} from '../enums/vehicle.enums'

export class CreateVehicleFormDto {
    // Core

    @IsString() vehicleStatus: VehicleStatus;

    @IsString() @RemoveSpaces() numberPlate: string;

    @IsString() color: string;

    @IsString() make: string;

    @IsString() model: string;

    @IsString() area: string;

    @IsNumber() year: number;

    @IsString() vehicleType: VehicleType;

    // Registration
    @IsString() registrationProvince: string;

    @RemoveSpaces() @Length(17, 17, { message: 'vin must be exactly 17 characters long' }) vin: string;

    @RemoveSpaces() @IsString() engineNumber: string;

    // Visual
    @IsString() bodyStyle: string;

    @IsString() additionalColors: string;

    @IsString() condition: VehicleCondition;

    @IsString() distinctiveFeatures: string;

    // Incident
    @IsDate() incidentTimestamp: Date;

    @IsString() lastSeenDirection: string;

    @IsNumber() numberOfOccupants: number;

    @IsString() suspectDescription: string;

    // Tracking
    @IsBoolean()trackingDeviceInstalled: boolean;

    @IsString() trackingProvider: string;

    @IsString() customDescription: string;
}