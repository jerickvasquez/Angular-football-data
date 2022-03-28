import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Games } from '../interfaces/games.interface';
import { Teams } from '../interfaces/teams.interface';
import { Roster } from '../interfaces/roster.interface';
import { Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private apiUrlGames: string = '/games';
  private apiUrlTeams: string = '/teams';
  private apiUrlRoster: string = '/roster';
  private apiUrlPlayer: string = '/player/search';

  constructor(private http: HttpClient) {}

  getGames(termino: number): Observable<Games[]> {
    const url = `${this.apiUrlGames}?year=${termino}`;
    return this.http.get<Games[]>(url);
  }

  getTeams(): Observable<Teams[]> {
    const url = `${this.apiUrlTeams}`;
    return this.http.get<Teams[]>(url);
  }

  getRosterPorEquipo(id: string): Observable<Roster[]> {
    const url = `${this.apiUrlRoster}?team=${id}`;
    console.log(url);
    return this.http.get<Roster[]>(url);
  }

  getPlayerDetails(name: string,team: string): Observable<Player[]> {
    const url = `${this.apiUrlPlayer}?searchTerm=${name}&team=${team}`;
    console.log(url);
    return this.http.get<Player[]>(url);
  }
}
