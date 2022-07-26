import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MeetingInitial, Meeting, CommitteeAgendaItemInitial ,CommitteeAgendaItem } from '../Meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  constructor(private http: HttpClient) { }

  getMeetings(selecteddate: Date,  comcode = "any", single = true) {
    selecteddate.setHours(0, 0,0, 0)
    var nextday = new Date(selecteddate.valueOf());
    nextday.setDate(selecteddate.getDate() + 1)
    var OlegUrl = "https://api.oregonlegislature.gov/odata/odataservice.svc/CommitteeMeetings?$format=json&$filter=MeetingDate%20ge%20DateTime%27" + selecteddate.toJSON() +"%27"
    if (single) {
      OlegUrl = OlegUrl + "%20and%20MeetingDate%20lt%20DateTime%27"+ nextday.toJSON() + "%27"
    }
    if (comcode != "any") {
      OlegUrl = OlegUrl + "%20and%20CommitteeCode%20eq%20%27" + comcode +"%27"
    }
    OlegUrl = OlegUrl + "&$orderby=MeetingDate%20asc"
    console.log(OlegUrl)
    let initialMeetings = this.http.get<MeetingInitial>(OlegUrl)
    return initialMeetings
  }
  getMeeting(meetingdate: string, comcode: string) {
    // Takes date in string form YYYY-MM-DDTHH:mm:ss
    var OlegUrl = "https://api.oregonlegislature.gov/odata/odataservice.svc/CommitteeMeetings?$format=json&$filter=MeetingDate%20eq%20DateTime%27" + meetingdate +"%27" 
    OlegUrl += "%20and%20CommitteeCode%20eq%20%27" + comcode + "%27"
    console.log(OlegUrl)
    let initialMeeting = this.http.get<MeetingInitial>(OlegUrl)
    return initialMeeting
  }

  getAgendaItems(meetingdate: string, comcode: string) {
    // Takes date in string form YYYY-MM-DDTHH:mm:ss
    var OlegUrl = "https://api.oregonlegislature.gov/odata/odataservice.svc/CommitteeAgendaItems?$format=json&$filter=MeetingDate%20eq%20DateTime%27" + meetingdate +"%27" 
    // 'CommitteCode' typo because they dgaf 
    OlegUrl += "%20and%20CommitteCode%20eq%20%27" + comcode + "%27"
    console.log(OlegUrl)
    let initialMeeting = this.http.get<CommitteeAgendaItemInitial>(OlegUrl)
    return initialMeeting 
  }
}
