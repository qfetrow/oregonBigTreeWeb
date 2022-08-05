import { Component, Input, OnInit } from '@angular/core';
import { Committee } from 'src/app/Committee';
import { Meeting } from 'src/app/Meeting';
import { MeetingsService } from 'src/app/services/meetings.service';

@Component({
  selector: 'app-committeesidebar',
  templateUrl: './committeesidebar.component.html',
  styleUrls: ['./committeesidebar.component.css']
})
export class CommitteesidebarComponent implements OnInit {

  @Input() committee: Committee = {} as Committee
  committeeOverviewURL: string = ""
  emailSubURL: string = ""
  meetings: Array<Meeting> = []
  constructor( private meetingservice: MeetingsService ) { }

  ngOnInit(): void {
    let committeecode = this.committee.CommitteeCode
    let today = new Date()
    today.setDate(1)
    today.setMonth(1)
    today.setFullYear(2022)
    this.meetingservice.getMeetings(today, committeecode, false).subscribe((meetingsinit) => this.meetings = meetingsinit.value)
    this.committeeOverviewURL = "https://olis.oregonlegislature.gov/liz/" + this.committee.SessionKey + "/Committees/" + this.committee.CommitteeCode + "/Overview"
    this.emailSubURL = "https://public.govdelivery.com/accounts/ORLEG/subscriber/new?topic_id=ORLEG_Committees_" + this.committee.CommitteeCode
  }


}
