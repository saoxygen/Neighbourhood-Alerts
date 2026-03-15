export enum ReportStatus {
  PENDING = 'PENDING',                      // Submitted, awaiting review
  VERIFIED = 'VERIFIED',                    // Confirmed by moderator or police
  UNDER_INVESTIGATION = 'UNDER_INVESTIGATION',
  RESOLVED = 'RESOLVED',                    // Incident has been dealt with
  DISMISSED = 'DISMISSED',                  // Found to be false or duplicate
  ARCHIVED = 'ARCHIVED',
}

export enum UrgencyLevel {
  LOW = 'LOW',                              // Suspicious activity, no immediate threat
  MEDIUM = 'MEDIUM',                        // Incident in progress or recently occurred
  HIGH = 'HIGH',                            // Active threat, armed suspects
  CRITICAL = 'CRITICAL',                    // Ongoing hijacking, life at risk
}

export enum SuspectCount {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
  FOUR_OR_MORE = 'FOUR_OR_MORE',
  UNKNOWN = 'UNKNOWN',
}

export enum WeaponType {
  FIREARM = 'FIREARM',
  KNIFE = 'KNIFE',
  BLUNT_OBJECT = 'BLUNT_OBJECT',
  MULTIPLE = 'MULTIPLE',
  NONE_VISIBLE = 'NONE_VISIBLE',
  UNKNOWN = 'UNKNOWN',
}