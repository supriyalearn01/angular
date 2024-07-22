import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://localhost:7125/';

  constructor(private http: HttpClient) { }
  
  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/User/allUsers`);
  }

  updateUser(data:any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}api/User/updatedUser`,data);
  }
  createUser(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}api/User/createUser`,data);
  }
  deleteUser(data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete<any>(`${this.apiUrl}api/User/DeleteUser`,{
      headers,
      body: data
    });
  }


}
