import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() match: any;
  players:any;
  constructor() { }

  ngOnInit() {
    this.players = [
      {id: 1, fName:'ali', lName: 'salah', goalTime: 5},
      {id: 1, fName:'hamdi', lName: 'marwen', goalTime: 18},
      {id: 1, fName:'karim', lName: 'maher', goalTime: 12},
      {id: 1, fName:'omar', lName: 'hamza', goalTime: 55}
    ]
  }

  resultMatch(a: number, b: number) {
    if (a > b) {
      return 'win';
    } else if (a < b) {
      return 'lost';
    } else {
      return 'draw';
    }
  }

  matchColor(value: string) {
    switch (value) {
      case 'win':
        return 'green';
      case 'lost':
        return 'red';
      case 'draw':
        return 'blue';
    }
  }



}
