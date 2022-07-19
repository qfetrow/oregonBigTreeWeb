import { Component, Input, OnInit } from '@angular/core';
import { Meeting } from 'src/app/Meeting';
import { Committee } from 'src/app/Committee';
import { CommitteesGetService } from 'src/app/services/committees-get.service';

@Component({
  selector: 'app-meetingcard',
  templateUrl: './meetingcard.component.html',
  styleUrls: ['./meetingcard.component.css']
})
export class MeetingcardComponent implements OnInit {

  @Input() meeting: Meeting = {} as Meeting  
  committee: Committee[] = []
  constructor(private committeeservice: CommitteesGetService) { }

  ngOnInit(): void {
    this.committeeservice.committeeFromCode(this.meeting.CommitteeCode).subscribe((cominit) => this.committee = cominit.value)
  }

  toTime(datestring: String): String {
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
  setColor() {
    var color = '#e3b885'
    if (this.meeting.CommitteeCode[0] == "E" || this.meeting.CommitteeCode.includes("HEC") || this.meeting.CommitteeCode.includes("SEC")) {
      // Emergency Committees are red
      color = '#ff8585'
    } 
    else if (this.meeting.CommitteeCode[0] == "H") {
      color = '#9b8cdc'
    } else if (this.meeting.CommitteeCode[0] == "S") {
      color = '#90b696'
    } 
    let styles = {
      'color': color,
    }
    return styles
  }
}
