import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  displayedColumns: string[] = [
    'season',
    'week',
    'home_team',
    'home_points',
    'away_team',
    'away_points',
  ];

  dataSource: any;

  hayError: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private gamesService: GamesService) {}

  searchGames() {
    this.filterGames = this.games.filter((games) => this.date.getFullYear());

    this.hayError = false;

    this.gamesService.getGames(this.date.getFullYear()).subscribe(
      (res) => {
        this.games = res;
        this.filterGames = res;
        this.dataSource = new MatTableDataSource<Games>(this.filterGames);
        this.dataSource.paginator = this.paginator;
      },
      (err) => {
        this.hayError = true;
        this.games = [];
      }
    );
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
