import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getCountryData(nationId: string): Observable<any> {
    const my_url = `http://api.worldbank.org/v2/country/${nationId}?format=json`;

    return this.http.get<any>(my_url);
}
}