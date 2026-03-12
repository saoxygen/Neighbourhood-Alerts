import {IsNotEmpty} from 'class-validator';
import {VehicleCondition, VehicleType} from '../enums/vehicle.enums'

export class CreateVehicleFormDto {
    // Core
    @IsNotEmpty() numberPlate: string;
    @IsNotEmpty() color: string;
    @IsNotEmpty() make: string;
    @IsNotEmpty() model: string;
    @IsNotEmpty() area: string;
    @IsNotEmpty() year: number;
    @IsNotEmpty() vehicleType: VehicleType; // enum

    // Registration
    registrationProvince: string;
    vin: string;
    engineNumber: string;

    // Visual
    bodyStyle: string;
    additionalColors: string;
    condition: VehicleCondition; // enum: GOOD | DAMAGED | POOR
    distinctiveFeatures: string;

    // Incident
    @IsNotEmpty() incidentTimestamp: Date;
    lastSeenDirection: string;
    numberOfOccupants: number;
    suspectDescription: string;

    // Tracking
    trackingDeviceInstalled: boolean;
    trackingProvider: string;

    customDescription: string;
}