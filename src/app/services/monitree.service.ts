import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import { MonitreeModel } from '../shared/models/monitree-info.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MonitreeService {

  private monitreeModel: MonitreeModel;

  constructor(private http: HttpClient) {
    this.monitreeModel = new MonitreeModel();
  }

  public getMonitreeModel() { return this.monitreeModel; }
  public setMonitreeModel(data) { this.monitreeModel = data; }

  public getMonitreeReadings() {
    // return this.http.get(location.origin + '/monitree/v1/readings?startDate=09-01-2018%2000%3A00%3A00&endDate=11-10-2018%2000%3A00%3A00', {
    return this.http.get('http://monitree.herokuapp.com/monitree/v1/readings?startDate=09-01-2018%2000%3A00%3A00&endDate=11-10-2018%2000%3A00%3A00', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
