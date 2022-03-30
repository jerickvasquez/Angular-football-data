import { Component, OnInit } from '@angular/core';
import { Games } from '../../interfaces/games.interface';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games-season',
  templateUrl: './games-season.component.html',
  styles: [],
})
export class GamesSeasonComponent {
  date: Date = new Date();
  year = this.date.getFullYear();

  games: Games[] = [];
  filterGames: Games[] = [];

  hayError: boolean = false;
  termino!: number;

  searchGames() {
    this.filterGames = this.games.filter((games) => games.id == this.termino);

    this.hayError = false;

    this.gamesService.getGames(this.termino).subscribe(
      (res) => {
        this.games = res;
        this.filterGames = res;
      },
      (err) => {
        this.hayError = true;
        this.games = [];
      }
    );
  }

  constructor(private gamesService: GamesService) {}

  // buscar() {
  //   this.hayError = false;

  //   this.gamesService.getGames(this.termino).subscribe(
  //     (res) => {
  //       this.games = res;
  //       this.filterGames = res;
  //     },
  //     (err) => {
  //       this.hayError = true;
  //       this.games = [];
  //     }
  //   );
  // }
}
