import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { switchMap } from 'rxjs';
import { Teams } from '../../interfaces/teams.interface';

@Component({
  selector: 'app-games-teams',
  templateUrl: './games-teams.component.html',
  styles: [],
})
export class GamesTeamsComponent implements OnInit {
  teams: Teams[] = [];
  hayError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamService: GamesService
  ) {}
  buscar() {
    this.hayError = false;

    this.teamService.getTeamsPorGames().subscribe(
      (res) => {
        this.teams = res;
      },
      (err) => {
        this.hayError = true;
        this.teams = [];
      }
    );
  }
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) =>
    //   this.gamesService
    //     .getTeamsPorGames()
    //     .subscribe((team) => console.log('ENTROOOO', team))
    // );
    //   this.activatedRoute.params
    //     .pipe(switchMap( (params) => this.gamesService.getTeamsPorGames() ))
    //     .subscribe((res) => console.log(res));
    // }
  }
}
