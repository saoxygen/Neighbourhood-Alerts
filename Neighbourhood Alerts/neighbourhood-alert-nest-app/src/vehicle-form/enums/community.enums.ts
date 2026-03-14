export enum CommunityAction {
  CONFIRMED = 'CONFIRMED',                  // "I saw this too"
  SIGHTED = 'SIGHTED',                      // Vehicle spotted at a new location
  RESOLVED = 'RESOLVED',                    // Community member reports it is resolved
  FALSE_REPORT = 'FALSE_REPORT',            // Flagged as incorrect
  SHARED = 'SHARED',                        // User shared the alert
}