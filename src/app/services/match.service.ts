import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Match } from '../models/match';
//import { Observable } from 'rxjs';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // matchUrl= 'api/matches';
  matchUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getAllMatches() {
    const matchesUrl = `${this.matchUrl}/api/matches`;
    return this.httpClient.get<{ message: string, matches: any }>(matchesUrl);
  }

  getMatchById(id: string) {
    const matchesUrl = `${this.matchUrl}/api/matches/${id}`;
    return this.httpClient.get<{ match: any, message: string }>(matchesUrl);
  }

  deleteMatch(id: string) {
    const matchesUrl = `${this.matchUrl}/api/matches/${id}`;
    return this.httpClient.delete<{ message: string }>(matchesUrl);
  }

  addMatch(match: Match, image: File){
    const matchesUrl = `${this.matchUrl}/api/matches`;

    let formData = new FormData();
    formData.append('teamOne', match.teamOne);
    formData.append('teamTwo', match.teamTwo);
    formData.append('scoreOne', String(match.scoreOne));
    formData.append('scoreTwo', String(match.scoreTwo));
    formData.append('img', image);

    formData.forEach((value, key) => {
      console.log("key (%s): value (%s)", key, value);
    });
    
    return this.httpClient.post(matchesUrl, formData);
  }

  // api/matches/id
  editmatch(match: any) {
    const matchesUrl = `${this.matchUrl}/api/matches/${match.id}`;
    return this.httpClient.put<{ updatedMatch: any }>(matchesUrl, match);
  }

  searchMatch(term: string) {
    return this.httpClient.get(`${this.matchUrl}/?teamOne=${term}`);
  }

}
