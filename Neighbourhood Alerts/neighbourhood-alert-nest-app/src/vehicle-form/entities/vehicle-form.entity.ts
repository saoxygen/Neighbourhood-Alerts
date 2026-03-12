import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('VehicleForm')
export class VehicleForm {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;
    userUUID: string;
    // Core
    @Column({type: 'varchar', length: '10', nullable: false})
    numberPlate: string;
    color: string;
    make: string;
    model: string;
    area: string;
    year: number;
    vehicleType: string; // enum

    // Registration
    registrationProvince: string;
    vin: string;
    engineNumber: string;

    // Visual
    bodyStyle: string;
    additionalColors: string;
    condition: string; // enum: GOOD | DAMAGED | POOR
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
