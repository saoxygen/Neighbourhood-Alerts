import { VehicleStatus, VehicleType, VehicleCondition } from '/Portfolio/Neighbourhood Alerts/shared/vehicle.enums'
import { CrimeDocumentType } from '/Portfolio/Neighbourhood Alerts/shared/document.enums'


export interface ICreateVehicleForm {
  // Core
  crimeDocumentType: CrimeDocumentType;
  vehicleStatus: VehicleStatus;
  numberPlate: string;
  color: string;
  make: string;
  model: string;
  area: string;
  year: string;
  vehicleType: VehicleType;
  // Registration
  registrationProvince: string;
  vin: string;
  engineNumber: string;
  // Visual
  bodyStyle: string;
  additionalColors: string;
  condition: VehicleCondition;
  distinctiveFeatures: string;
  // Incident
  incidentTimestamp: Date;
  lastSeenDirection: string;
  numberOfOccupants: string;
  suspectDescription: string;
  // Tracking
  trackingDeviceInstalled: string;
  trackingProvider: string;
  customDescription: string;
}
