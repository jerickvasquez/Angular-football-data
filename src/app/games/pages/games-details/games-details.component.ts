import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Games } from '../../interfaces/games.interface';
import { Roster } from '../../interfaces/roster.interface';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games-details',
  templateUrl: './games-details.component.html',
  styles: [],
})
export class GamesDetailsComponent implements OnInit {
  team!: Games;
  roster: Roster[] = [];
  fullname: string = '';
  hayError: boolean = false;

  constructor(
    private rosterService: GamesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id']);

      this.rosterService
        .getRosterPorEquipo(params['id'])
        .subscribe((roster) => {
          this.roster = roster;
          console.log(roster);
        });
    });
  }

  getName(roster: Roster) {
    return roster.first_name + ' ' + roster.last_name;
  }
}
