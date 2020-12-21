import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches =  [
    {  id:  1,  scoreOne:  1, scoreTwo: 3, teamOne: 'FCB', teamTwo: 'Madrid'},
    {  id:  2,  scoreOne:  3, scoreTwo: 3, teamOne: 'CSS', teamTwo: 'Kairouan'},
    {  id:  3,  scoreOne:  6, scoreTwo: 2, teamOne: 'FCB', teamTwo: 'ATM'},
    {  id:  4,  scoreOne:  0, scoreTwo: 4, teamOne: 'EST', teamTwo: 'CA'}
   
   ];

   return {matches};

  }
}