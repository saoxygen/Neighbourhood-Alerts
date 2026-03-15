export enum VehicleType {
  // Passenger Vehicles
  SEDAN = 'SEDAN',
  HATCHBACK = 'HATCHBACK',
  COUPE = 'COUPE',
  CONVERTIBLE = 'CONVERTIBLE',
  WAGON = 'WAGON',
  SUV = 'SUV',
  CROSSOVER = 'CROSSOVER',
  MPV = 'MPV',                         // Multi-Purpose Vehicle / People Carrier

  // Light Commercial
  BAKKIE = 'BAKKIE',                   // Pickup Truck (SA term)
  MINIBUS = 'MINIBUS',                 // e.g. Toyota Quantum / Taxis
  MINIBUS_TAXI = 'MINIBUS_TAXI',       // Specifically SA minibus taxi
  VAN = 'VAN',                         // Panel van / Cargo van
  MICROBUS = 'MICROBUS',               // Smaller than minibus

  // Heavy Commercial
  TRUCK = 'TRUCK',                     // General freight truck
  FLATBED_TRUCK = 'FLATBED_TRUCK',
  TIPPER_TRUCK = 'TIPPER_TRUCK',
  TANKER = 'TANKER',
  SEMI_TRUCK = 'SEMI_TRUCK',           // Articulated / 18-wheeler
  BOX_TRUCK = 'BOX_TRUCK',             // Closed body freight

  // Buses
  BUS = 'BUS',
  COACH = 'COACH',                     // Long-distance passenger bus

  // Two / Three Wheelers
  MOTORBIKE = 'MOTORBIKE',
  SCOOTER = 'SCOOTER',
  TRIKE = 'TRIKE',
  QUAD_BIKE = 'QUAD_BIKE',

  // Specialised / Off-Road
  AMBULANCE = 'AMBULANCE',
  FIRE_TRUCK = 'FIRE_TRUCK',
  ARMOURED_VEHICLE = 'ARMOURED_VEHICLE',
  TRACTOR = 'TRACTOR',
  FORKLIFT = 'FORKLIFT',
  GOLF_CART = 'GOLF_CART',

  OTHER = 'OTHER',
}
export enum VehicleCondition {
    GOOD = 'GOOD',
    DAMAGED = 'DAMAGED',
    OKAY = 'OKAY',
    BAD = 'BAD'
}

export enum VehicleStatus {
  STOLEN = 'STOLEN',
  WANTED = 'WANTED',
  INVOLVED_IN_CRIME = 'INVOLVED_IN_CRIME',
  FOUND = 'FOUND',
  ACTIVE = 'ACTIVE',
  MISSING = 'MISSING',
  ABANDONED = 'ABANDONED',
  ACCIDENT_INVOLVED = 'ACCIDENT_INVOLVED',
  IMPOUNDED = 'IMPOUNDED',
  SEIZED = 'SEIZED',
  UNDER_INVESTIGATION = 'UNDER_INVESTIGATION',
  IN_REPAIR = 'IN_REPAIR',
  WRITTEN_OFF = 'WRITTEN_OFF',
  DECOMMISSIONED = 'DECOMMISSIONED',
  RECOVERED  = 'RECOVERED',
  HIJACKED  = 'HIJACKED',
  UNKNOWN = 'UNKNOWN',
}