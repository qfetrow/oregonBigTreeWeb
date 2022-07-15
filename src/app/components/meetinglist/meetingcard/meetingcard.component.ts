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
}
