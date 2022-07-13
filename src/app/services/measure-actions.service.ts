import { Injectable } from '@angular/core';
import { MeasureAction, MeasureActionInitial } from '../MeasureAction';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeasureActionsService {

  constructor(private http: HttpClient) { }

  getActions(sesskey: string, measureprefix: string, measurenumber: string) {
    let header = "https://api.oregonlegislature.gov/odata/odataservice.svc/MeasureHistoryActions?$format=json&"
    let sessfilter = "$filter=SessionKey%20eq%20%27"+sesskey+"%27"
    let and = "%20and%20"
    let measurefilter = "MeasureNumber%20eq%20" + measurenumber
    let mprefixfilter = "MeasurePrefix%20eq%20%27" + measureprefix + "%27"
    let frankenstein = header+sessfilter+and+measurefilter+and+mprefixfilter
    console.log(frankenstein)
    let initialMeasureActions = this.http.get<MeasureActionInitial>(frankenstein);
    return initialMeasureActions
  }

}
