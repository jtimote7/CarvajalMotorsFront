import { Injectable } from '@angular/core';
import { Cargo } from '../models/cargo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
private apiUrl = 'http://localhost:8080/motors';

  constructor(private http: HttpClient) { }

  saveUser(data: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(this.apiUrl + "/savecargo", data);
  }

  getCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.apiUrl + "/cargos");
  }
}
