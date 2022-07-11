import { Injectable } from '@angular/core';
import { Committee, CommitteeInitial } from '../Committee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommitteesGetService {

  constructor(private http: HttpClient) { }
  // TODO: Replace hardcoded "2022R1" with updated session
  private OlegCommitteeURL = "https://api.oregonlegislature.gov/odata/odataservice.svc/Committees?$format=json&$filter=SessionKey%20eq%20%272022R1%27"

  getCommittees(): Observable<CommitteeInitial> {
    let committeesObservable = this.http.get<CommitteeInitial>(this.OlegCommitteeURL)
    return committeesObservable
  }
}
