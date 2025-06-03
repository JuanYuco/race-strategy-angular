import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Driver[]> {
    const headers = new HttpHeaders({
      'X-API-KEY' : 'estoesunallave'
    });

    return this.http.get<Driver[]>('https://localhost:44393/api/driver/GetAll', {headers});
  }
}
