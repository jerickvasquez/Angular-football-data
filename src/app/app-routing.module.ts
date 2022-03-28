import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesDetailsComponent } from './games/pages/games-details/games-details.component';
import { GamesSeasonComponent } from './games/pages/games-season/games-season.component';
import { GamesTeamsComponent } from './games/pages/games-teams/games-teams.component';

const routes: Routes = [
  {
    path: '',
    component: GamesSeasonComponent,
    pathMatch: 'full',
  },
  {
    path: 'teams',
    component: GamesTeamsComponent,
  },
  {
    path: 'roster/:id',
    component: GamesDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
