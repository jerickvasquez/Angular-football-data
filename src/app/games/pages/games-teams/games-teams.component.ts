import { Component, OnInit, ViewChild } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Teams } from '../../interfaces/teams.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-games-teams',
  templateUrl: './games-teams.component.html',
  styles: [],
})
export class GamesTeamsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'school',
    'mascot',
    'abbreviation',
    'conference',
  ];

  dataSource: any;
  teams: Teams[] = [];

  constructor(private teamService: GamesService) {}

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(
      (res) => {
        this.teams = res;
        this.dataSource = new MatTableDataSource<Teams>(this.teams);
        this.dataSource.paginator = this.paginator;
        console.log(res);
      },
      (err) => {
        this.teams = [];
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
