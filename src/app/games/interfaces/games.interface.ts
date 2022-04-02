export interface Games {
  id: string;
  season: number;
  week: number;
  season_type: SeasonType;
  start_date: Date;
  start_time_tbd: null;
  neutral_site: boolean;
  conference_game: boolean | null;
  attendance: null;
  venue_id: null;
  venue: null;
  home_id: number;
  home_team: string;
  home_conference: Conference;
  home_points: number;
  home_line_scores: any[];
  home_post_win_prob: null;
  home_pregame_elo: number | null;
  home_postgame_elo: number | null;
  away_id: number;
  away_team: string;
  away_conference: Conference | null;
  away_points: number;
  away_line_scores: any[];
  away_post_win_prob: null;
  away_pregame_elo: number | null;
  away_postgame_elo: number | null;
  excitement_index: null;
  highlights: null;
  notes: null;
}

export enum Conference {
  Acc = 'ACC',
  Big12 = 'Big 12',
  BigEast = 'Big East',
  BigTen = 'Big Ten',
  BigWest = 'Big West',
  ConferenceUSA = 'Conference USA',
  FBSIndependents = 'FBS Independents',
  MidAmerican = 'Mid-American',
  MountainWest = 'Mountain West',
  Pac10 = 'Pac-10',
  SEC = 'SEC',
  WesternAthletic = 'Western Athletic',
}

export enum SeasonType {
  Regular = 'regular',
}
