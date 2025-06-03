import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptimalStrategy, StrategyForm } from '../models/strategy';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  constructor(private http : HttpClient) { }

  getAll(strategyForm : StrategyForm) : Observable<OptimalStrategy[]> {
    const headers = new HttpHeaders({
      'X-API-KEY' : environment.apiKey
    });

    return this.http.get<OptimalStrategy[]>(`${environment.backendBaseUrl}api/strategy/optimal?maxLaps=${strategyForm.laps}&createdBy=${strategyForm.createdBy}&driverId=${strategyForm.driverId}`, {headers});
  }
}
