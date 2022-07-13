import { Injectable } from '@angular/core';
import { DocumentData, DocumentInitial, Measure, MeasureInitial } from '../Measure';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingMeasuresService {

  constructor(private http: HttpClient) { }
  
  getMeasures(sesskey: string="", committeecode: string = "", measurenumber: string = "", measureprefix: string = ""): Observable<MeasureInitial> {
    // This code is absolutely disgusting i'm sorry
    // returns measure objects based on the filters given
    var commfilter: string = "";
    var measurefilter: string = "";
    var mprefixfilter: string = "";
    var and = "%20and%20";
    var sessfilter = "";
    if ((sesskey == "any" )) {
      sessfilter = "$filter="
      and = ""
    } else if (sesskey != "") {
      sessfilter = "$filter=SessionKey%20eq%20%27"+sesskey+"%27"
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
    let initalMeasures = this.http.get<MeasureInitial>(frankensteinURL);
    return initalMeasures;
  }

  getDocument(sesskey: string, measureprefix: string, measurenumber: string) {
    let header = "https://api.oregonlegislature.gov/odata/odataservice.svc/MeasureDocuments?$format=json&"
    let sessfilter = "$filter=SessionKey%20eq%20%27"+sesskey+"%27"
    let and = "%20and%20"
    let measurefilter = "MeasureNumber%20eq%20" + measurenumber
    let mprefixfilter = "MeasurePrefix%20eq%20%27" + measureprefix + "%27"
    let frankenstein = header+sessfilter+and+measurefilter+and+mprefixfilter
    console.log("Checking out: "+frankenstein)
    let initialMeasureActions = this.http.get<DocumentInitial>(frankenstein);
    return initialMeasureActions
  }
}
