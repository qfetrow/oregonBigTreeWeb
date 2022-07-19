import { Component, OnInit, Input } from '@angular/core';
import { Meeting } from 'src/app/Meeting';

@Component({
  selector: 'app-csmeetingcard',
  templateUrl: './csmeetingcard.component.html',
  styleUrls: ['./csmeetingcard.component.css']
})
export class CsmeetingcardComponent implements OnInit {

  @Input() meeting: Meeting = {} as Meeting
  meetingurl: string = ""
  constructor() { }

  ngOnInit(): void {
    this.meetingurl = "https://olis.oregonlegislature.gov/liz/" + this.meeting.SessionKey+ "/Committees/" + this.meeting.CommitteeCode
    this.meetingurl += "/" + this.toUrlDate(this.meeting.MeetingDate) + "/Agenda"
  }

  toUrlDate(datestring: string): string {
    // OLIS Url's have datetimes in YYYY-MM-DD-hh-mm
    let newarr=datestring.split("T")
    let militarytime = newarr[1]
    let tsplit = militarytime.split(":")
    return  newarr[0]+"-"+tsplit[0]+"-"+tsplit[1]
  }

  toTime(datestring: String): String {
    // 'YYYY-MM-DDTHH:mm' -> 'hh:mm am/pm'
    let newarr = datestring.split("T")
    let militarytime = newarr[1]
    var hourminutesec = militarytime.split(":")
    var ampm = ' am'
    if (parseInt(hourminutesec[0]) > 12) {
      ampm = ' pm'
    }
    let hour = parseInt(hourminutesec[0]) % 12
    return hour + ":" + hourminutesec[1] + ampm
  }

}
