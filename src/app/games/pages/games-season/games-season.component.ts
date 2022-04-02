import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  minDate = new Date(1869, 0, 1);
  maxDate = new Date(this.year - 1, 12, 31);

  hayError: boolean = false;

  searchGames() {
    this.filterGames = this.games.filter((games) => this.date.getFullYear());

    this.hayError = false;

    this.gamesService.getGames(this.date.getFullYear()).subscribe(
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
}
