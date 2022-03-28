import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesSeasonComponent } from './pages/games-season/games-season.component';
import { GamesTeamsComponent } from './pages/games-teams/games-teams.component';
import { GamesDetailsComponent } from './pages/games-details/games-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GamesSeasonComponent,
    GamesTeamsComponent,
    GamesDetailsComponent,
  ],
  exports: [GamesSeasonComponent, GamesTeamsComponent, GamesDetailsComponent],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class GamesModule {}
