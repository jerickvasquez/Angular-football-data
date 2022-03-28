import { Component, OnInit } from '@angular/core';
import { Games } from '../../interfaces/games.interface';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games-season',
  templateUrl: './games-season.component.html',
  styles: [],
})
export class GamesSeasonComponent {

  games: Games[]=[];
  hayError: boolean = false;
  termino: number = 2000;

  constructor(private gamesService: GamesService) {}

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.gamesService.getGames(this.termino).subscribe(
      (res) => {
        this.games=res;
        console.log(res);
      },
      (err) => {
        this.hayError = true;
        this.games=[];
      }
    );
  }
}
