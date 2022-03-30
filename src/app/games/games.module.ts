import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesSeasonComponent } from './pages/games-season/games-season.component';
import { GamesTeamsComponent } from './pages/games-teams/games-teams.component';
import { GamesDetailsComponent } from './pages/games-details/games-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlayerDetailsComponent } from './pages/player-details/player-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    GamesSeasonComponent,
    GamesTeamsComponent,
    GamesDetailsComponent,
    PlayerDetailsComponent,
  ],
  exports: [
    GamesSeasonComponent,
    GamesTeamsComponent,
    GamesDetailsComponent,
    PlayerDetailsComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, RouterModule, NgbModule],
})
export class GamesModule {}
