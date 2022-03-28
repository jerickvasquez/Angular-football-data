import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Teams } from '../../interfaces/teams.interface';


@Component({
  selector: 'app-games-teams',
  templateUrl: './games-teams.component.html',
  styles: [],
})
export class GamesTeamsComponent implements OnInit {
  teams: Teams[] = [];


  hayError: boolean = false;

  constructor(private teamService: GamesService) {

  }


  ngOnInit(): void {
    this.hayError = false;

    this.teamService.getTeams().subscribe(
      (res) => {
        this.teams = res;
      },
      (err) => {
        this.hayError = true;
        this.teams = [];
      }
    );
  }
}
