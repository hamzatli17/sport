import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  match:any;
  id:string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService,
    private router:Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      data => {
        this.match = data.match[0];
      }
    )
  }

  editMatch() {
    this.matchService.editmatch(this.match).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }

}
