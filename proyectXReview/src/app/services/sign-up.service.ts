import { Injectable } from '@angular/core';
import { Users } from 'model-Users';
import { USERS } from 'users';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private apiUrl ='http://localhost:5000/Users';
  
  
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable <Users[]>{
    return this.http.get<Users[]>(this.apiUrl);
  }
  addUsers(user: Users):Observable<Users>{
    return this.http.post<Users>(this.apiUrl,user,httpOptions);
  }

}
