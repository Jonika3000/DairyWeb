import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseApiUrl: string = 'https://localhost:7049';
  constructor(private http: HttpClient) { }
 public getAllUsers(): Observable<User[]>{
   return this.http.get<User[]>(this.baseApiUrl +'/api/users');
  }
  public RegisterUser(user: User):Observable<User>{
    user.id = 0;
   return this.http.post<User>(this.baseApiUrl + '/api/users',user);
  }
}
