import { Injectable } from '@angular/core';
import { Measure, MeasureInitial } from '../Measure';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingMeasuresService {

  // For now we're only getting the ten latest measures
  private olegMeasureUrl = "https://api.oregonlegislature.gov/odata/odataservice.svc/Measures?$format=json&$orderby=CreatedDate%20desc&$top=10"

  constructor(private http: HttpClient) { }
  
  getMeasures(sesskey: string="", committeecode: string = "", measurenumber: string = "", measureprefix: string = ""): Observable<MeasureInitial> {
    // This code is absolutely disgusting i'm sorry
    // returns measure objects based on the filters given
    var commfilter: string = "";
    var measurefilter: string = "";
    var mprefixfilter: string = "";
    var and = "%20and%20";
    var sessfilter = "$filter=SessionKey%20eq%20%272022R1%27";
    if ((sesskey = "any" )) {
      sessfilter = "$filter="
      and = ""
    }
    if (!(committeecode == "")) {
      commfilter = and + "CurrentCommitteeCode%20eq%20%27" + committeecode + "%27"
      and = "%20and%20"
    }
    if (!(measurenumber == "")) {
      measurefilter = and + "MeasureNumber%20eq%20" + measurenumber
      and = "%20and%20"
    }
    if (!(measureprefix == "")) {
      mprefixfilter = and + "MeasurePrefix%20eq%20%27" + measureprefix + "%27"
    }  
    let frankensteinURL = "https://api.oregonlegislature.gov/odata/odataservice.svc/Measures?$format=json&" + sessfilter + commfilter + measurefilter + mprefixfilter + "&$orderby=CreatedDate%20desc";
    console.log(frankensteinURL);
    this.olegMeasureUrl = frankensteinURL;
    let initalMeasures = this.http.get<MeasureInitial>(this.olegMeasureUrl);
    return initalMeasures;
  }
}
