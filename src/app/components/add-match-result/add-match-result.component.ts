import { FormGroup, FormBuilder } from '@angular/forms';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-match-result',
  templateUrl: './add-match-result.component.html',
  styleUrls: ['./add-match-result.component.css']
})
export class AddMatchResultComponent implements OnInit {

  matchForm: FormGroup;
  match: any = {};
  imagePreview: string;
  constructor(
    private matchService: MatchService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.matchForm = this.fb.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: [''],
      img: ['']
    })
  }

  addMatch() {
    this.matchService.addMatch(this.match, this.matchForm.value.img).subscribe(
      data => {
        this.router.navigate(['matches']);
      }
    )
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.matchForm.patchValue({ img: file });
    this.matchForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);

  }



}
