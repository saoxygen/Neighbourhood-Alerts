import {Length} from 'class-validator';
import {VehicleCondition, VehicleType, VehicleStatus} from '../enums/vehicle.enums'

export class CreateVehicleFormDto {
    // Core

    vehicleStatus: VehicleStatus;

    numberPlate: string;

    color: string;

    make: string;

    model: string;

    area: string;

    year: number;

    vehicleType: VehicleType;

    // Registration
    registrationProvince: string;

    @Length(17, 17, { message: 'vin must be exactly 17 characters long' }) vin: string;

    engineNumber: string;

    // Visual
    bodyStyle: string;

    additionalColors: string;

    condition: VehicleCondition;

    distinctiveFeatures: string;

    // Incident
    incidentTimestamp: Date;

    lastSeenDirection: string;

    numberOfOccupants: number;

    suspectDescription: string;

    // Tracking
    trackingDeviceInstalled: boolean;

    trackingProvider: string;

    customDescription: string;
}