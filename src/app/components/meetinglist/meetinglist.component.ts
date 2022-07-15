import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Meeting } from 'src/app/Meeting';
import { MeetingsService } from 'src/app/services/meetings.service';

@Component({
  selector: 'app-meetinglist',
  templateUrl: './meetinglist.component.html',
  styleUrls: ['./meetinglist.component.css']
})
export class MeetinglistComponent implements OnInit {

  @Input() selecteddate: Date = new Date()
  meetings: Meeting[] = []
  constructor(private meetingservice: MeetingsService) { }

  ngOnInit(): void {
    this.meetingservice.getMeetings(this.selecteddate).subscribe((meetingsinitial) => this.meetings = meetingsinitial.value)

  }
}
