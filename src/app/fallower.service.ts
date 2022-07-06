import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FallowerService {
  httpClient: any;

  constructor(private http: HttpClient) { }

  public getConfig(): Observable<any> {
    return this.http.get("https://api.github.com/users");
  }

  public getUserFollowers(username: string): Observable<any> {
    console.log(username);
    
    return this.http.get(`https://api.github.com/users/${username}/followers`);
  }
}
