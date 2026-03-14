import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { VehicleType, VehicleCondition } from '../enums/vehicle.enums';

@Entity('VehicleForm')
export class VehicleForm {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column({ type: 'uuid', nullable: false })
    userUUID: string;

    @Column({ type: 'varchar', length: 20, nullable: false })
    vehicleStatus: string;

    // Core
    @Column({ type: 'varchar', length: 10, nullable: true })
    numberPlate: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    color: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    make: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    model: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    area: string;

    @Column({ type: 'int', nullable: true })
    year: number;

    @Column({ type: 'enum', enum: VehicleType, nullable: false })
    vehicleType: VehicleType;

    // Registration
    @Column({ type: 'varchar', length: 10, nullable: true })
    registrationProvince: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    vin: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    engineNumber: string;

    // Visual
    @Column({ type: 'varchar', length: 50, nullable: true })
    bodyStyle: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    additionalColors: string;

    @Column({ type: 'enum', enum: VehicleCondition, nullable: true })
    condition: VehicleCondition;

    @Column({ type: 'text', nullable: true })
    distinctiveFeatures: string;

    // Incident
    @Column({ type: 'timestamp', nullable: false })
    incidentTimestamp: Date;

    @Column({ type: 'varchar', length: 100, nullable: true })
    lastSeenDirection: string;

    @Column({ type: 'int', nullable: true })
    numberOfOccupants: number;

    @Column({ type: 'text', nullable: true })
    suspectDescription: string;

    // Tracking
    @Column({ type: 'boolean', default: false, nullable: true })
    trackingDeviceInstalled: boolean;

    @Column({ type: 'varchar', length: 50, nullable: true })
    trackingProvider: string;

    @Column({ type: 'text', nullable: true })
    customDescription: string;

    @CreateDateColumn()
    createdAt: Date;
}
