import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/motors';

  constructor(private http: HttpClient) { }

  saveUser(data: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl + "/saveUser", data);
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl + "/users");
  }
}
