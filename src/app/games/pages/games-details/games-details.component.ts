import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  displayedColumns: string[] = [
    'first_name',
    'last_name',
    'home_country',
    'team',
    'weight',
    'jersey',
    'position',
  ];

  dataSource: any;

  constructor(
    private rosterService: GamesService,
    private activatedRoute: ActivatedRoute
  ) {}

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id']);

      this.rosterService
        .getRosterPorEquipo(params['id'])
        .subscribe((roster) => {
          this.roster = roster;
          this.dataSource = new MatTableDataSource<Roster>(this.roster);
          this.dataSource.paginator = this.paginator;
          console.log(roster);
        });
    });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getName(roster: Roster) {
    return roster.first_name + ' ' + roster.last_name;
  }
}
