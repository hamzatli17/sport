import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {

  id:string;
  match:any;
  constructor(
    private matchService: MatchService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      data => {
        this.match = data.match[0];
      }
    )
  }

}
