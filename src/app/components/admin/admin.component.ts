import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  matches:any;
  constructor(
    private matchService:MatchService,
    private router:Router
    ) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data.matches;
      }
    );
  }

  editMatch(id:number) {
    this.router.navigate([`editMatch/${id}`]);
  }
  displayMatch(id:number) {
    this.router.navigate([`displayMatch/${id}`]);
  }

  deleteMatch(id:string) {
    this.matchService.deleteMatch(id).subscribe(
      data => {
      }
    );
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data.matches;
      }
    );
  }

}
