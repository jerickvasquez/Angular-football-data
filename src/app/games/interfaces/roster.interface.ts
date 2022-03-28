export interface Roster {
  id: string | null;
  first_name: null | string;
  last_name: null | string;
  team: string | null;
  weight: number | null;
  height: number | null;
  jersey: number | null;
  year: number | null;
  position: Position | null;
  home_city: null | string;
  home_state: HomeState | null;
  home_country: HomeCountry | null;
  home_latitude: null | string;
  home_longitude: null | string;
  home_county_fips: null | string;
  recruit_ids: number[];
}

export enum HomeCountry {
  AmericanSamoa = 'American Samoa',
  Australia = 'Australia',
  Austria = 'Austria',
  Bahamas = 'Bahamas',
  Belgium = 'Belgium',
  Brazil = 'Brazil',
  Can = 'CAN',
  Canada = 'Canada',
  Denmark = 'Denmark',
  England = 'England',
  France = 'France',
  Germany = 'Germany',
  Italy = 'Italy',
  Latvia = 'Latvia',
  Mexico = 'Mexico',
  Netherlands = 'Netherlands',
  Nigeria = 'Nigeria',
  PuertoRico = 'Puerto Rico',
  Samoa = 'Samoa',
  Scotland = 'Scotland',
  Sweden = 'Sweden',
  Switzerland = 'Switzerland',
  Tonga = 'Tonga',
  Usa = 'USA',
}

export enum HomeState {
  Ab = 'AB',
  Act = 'ACT',
  Ak = 'AK',
  Al = 'AL',
  Ar = 'AR',
  Az = 'AZ',
  Bc = 'BC',
  CA = 'CA',
  CT = 'CT',
  Co = 'CO',
  Dc = 'DC',
  De = 'DE',
  Empty = '',
  FL = 'FL',
  Ga = 'GA',
  Hi = 'HI',
  ID = 'ID',
  IL = 'IL',
  Ia = 'IA',
  In = 'IN',
  Ks = 'KS',
  Ky = 'KY',
  La = 'LA',
  MS = 'MS',
  MT = 'MT',
  Ma = 'MA',
  Md = 'MD',
  Me = 'ME',
  Mi = 'MI',
  Mn = 'MN',
  Mo = 'MO',
  NP = 'NP',
  NS = 'NS',
  Nc = 'NC',
  Nd = 'ND',
  Ne = 'NE',
  Nh = 'NH',
  Nj = 'NJ',
  Nm = 'NM',
  Nsw = 'NSW',
  Nv = 'NV',
  Ny = 'NY',
  Oh = 'OH',
  Ok = 'OK',
  On = 'ON',
  Or = 'OR',
  Pa = 'PA',
  Pq = 'PQ',
  Qc = 'QC',
  Qld = 'QLD',
  Ri = 'RI',
  SD = 'SD',
  Sa = 'SA',
  Sc = 'SC',
  Sk = 'SK',
  Tas = 'TAS',
  Tn = 'TN',
  Tx = 'TX',
  Ut = 'UT',
  VT = 'VT',
  Va = 'VA',
  Vic = 'VIC',
  Wa = 'WA',
  Wi = 'WI',
  Wv = 'WV',
  Wy = 'WY',
}

export enum Position {
  Ath = 'ATH',
  C = 'C',
  Cb = 'CB',
  DB = 'DB',
  DL = 'DL',
  De = 'DE',
  Dt = 'DT',
  Empty = '?',
  Fb = 'FB',
  G = 'G',
  LB = 'LB',
  Ls = 'LS',
  NT = 'NT',
  Ol = 'OL',
  Ot = 'OT',
  P = 'P',
  Pk = 'PK',
  Qb = 'QB',
  Rb = 'RB',
  S = 'S',
  Te = 'TE',
  Wr = 'WR',
}
