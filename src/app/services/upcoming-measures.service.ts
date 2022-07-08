import { Injectable } from '@angular/core';
import { Measure, MeasureInitial } from '../Measure';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingMeasuresService {

  // For now we're only getting the ten latest measures
  private olegMeasureUrl = "https://api.oregonlegislature.gov/odata/odataservice.svc/Measures?$format=json&$orderby=CreatedDate%20desc&$top=10"

  constructor(private http: HttpClient) { }
  
  getMeasures(): Observable<MeasureInitial> {
     let initalMeasures = this.http.get<MeasureInitial>(this.olegMeasureUrl);
      return initalMeasures;
  }
}
