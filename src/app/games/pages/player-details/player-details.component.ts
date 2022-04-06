import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Games } from '../../interfaces/games.interface';
import { Player } from '../../interfaces/player.interface';
import { Roster } from '../../interfaces/roster.interface';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styles: [],
})
export class PlayerDetailsComponent implements OnInit {
  team!: Games;
  player: Player[] = [];
  hayError: boolean = false;

  constructor(
    private playerService: GamesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['name'], params['team']);

      this.playerService
        .getPlayerDetails(params['name'], params['team'])
        .subscribe((player) => {
          this.player = player;
          console.log(player);
        });
    });
  }
}
