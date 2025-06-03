import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptimalStrategy, StrategyForm } from '../models/strategy';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  constructor(private http : HttpClient) { }

  getAll(strategyForm : StrategyForm) : Observable<OptimalStrategy[]> {
    const headers = new HttpHeaders({
      'X-API-KEY' : 'estoesunallave'
    });

    return this.http.get<OptimalStrategy[]>(`https://localhost:44393/api/strategy/optimal?maxLaps=${strategyForm.laps}&createdBy=${strategyForm.createdBy}&driverId=${strategyForm.driverId}`, {headers});
  }
}
