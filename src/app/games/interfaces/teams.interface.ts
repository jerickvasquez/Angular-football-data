export interface Teams {
  id: number;
  school: string;
  mascot: null | string;
  abbreviation: null | string;
  alt_name1: null | string;
  alt_name2: null | string;
  alt_name3: null | string;
  conference: Conference | null;
  division: Division | null;
  color: null | string;
  alt_color: null | string;
  logos: string[] | null;
  location: Location;
}

export enum Conference {
  Acc = 'ACC',
  AmericanAthletic = 'American Athletic',
  Big12 = 'Big 12',
  BigTen = 'Big Ten',
  ConferenceUSA = 'Conference USA',
  FBSIndependents = 'FBS Independents',
  MidAmerican = 'Mid-American',
  MountainWest = 'Mountain West',
  Pac12 = 'Pac-12',
  SEC = 'SEC',
  SunBelt = 'Sun Belt',
}

export enum Division {
  Atlantic = 'Atlantic',
  Coastal = 'Coastal',
  East = 'East',
  Mountain = 'Mountain',
  North = 'North',
  South = 'South',
  West = 'West',
}

export interface Location {
  venue_id: number | null;
  name: null | string;
  city: null | string;
  state: null | string;
  zip: null | string;
  country_code: CountryCode | null;
  timezone: Timezone | null;
  latitude: number | null;
  longitude: number | null;
  elevation: null | string;
  capacity: number | null;
  year_constructed: number | null;
  grass: boolean | null;
  dome: boolean | null;
}

export enum CountryCode {
  Us = 'US',
}

export enum Timezone {
  AmericaBoise = 'America/Boise',
  AmericaChicago = 'America/Chicago',
  AmericaDenver = 'America/Denver',
  AmericaDetroit = 'America/Detroit',
  AmericaIndianaIndianapolis = 'America/Indiana/Indianapolis',
  AmericaKentuckyLouisville = 'America/Kentucky/Louisville',
  AmericaLosAngeles = 'America/Los_Angeles',
  AmericaNewYork = 'America/New_York',
  AmericaPhoenix = 'America/Phoenix',
  PacificHonolulu = 'Pacific/Honolulu',
}
