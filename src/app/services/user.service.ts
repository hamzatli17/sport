import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl= 'http://localhost:3000'
  constructor(private httpClient:HttpClient) { }


  signUp(user:any) {
    const usersUrl = `${this.userUrl}/api/signup`;    
    return this.httpClient.post(usersUrl, user);
  }

  login(user) {
    const usersUrl = `${this.userUrl}/api/login`;    
    return this.httpClient.post<{message:string}>(usersUrl, user);
  }


}
