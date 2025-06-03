import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Driver[]> {
    const headers = new HttpHeaders({
      'X-API-KEY' : environment.apiKey
    });

    return this.http.get<Driver[]>(`${environment.backendBaseUrl}api/driver/GetAll`, {headers});
  }
}
