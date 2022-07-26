import { Component, Input, OnInit } from '@angular/core';
import { CommitteeAgendaItem, Meeting } from 'src/app/Meeting';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MeetingsService } from 'src/app/services/meetings.service';

@Component({
  selector: 'app-meetingdetail',
  templateUrl: './meetingdetail.component.html',
  styleUrls: ['./meetingdetail.component.css']
})
export class MeetingdetailComponent implements OnInit {

  meeting: Meeting[] = [];
  agendaItems: CommitteeAgendaItem[] = []
  constructor( private meetingService: MeetingsService ,private route: ActivatedRoute, private location: Location ) { }

  ngOnInit(): void {
    let committeecode = this.route.snapshot.paramMap.get('comcode')
    let meetingdate = this.route.snapshot.paramMap.get('date')
    if (meetingdate == null) {
      // Unwrapping values
      meetingdate = ""
    }
    if (committeecode == null) {
      // Unwarpping committee code values
      committeecode = ""
    }
    this.meetingService.getMeeting(meetingdate, committeecode).subscribe((minitial) => this.meeting = minitial.value)
    this.meetingService.getAgendaItems(meetingdate, committeecode).subscribe((ainitial) => this.agendaItems = ainitial.value)

  }

  prettyBulletPoints(commentstring = "") {
    let acommentstring = commentstring.replace(/<\u>/g, "")
    let bcommentstring = acommentstring.replace(/\n/g, "<br>")
    return bcommentstring.replace(/\u2022/g, "<br>\u2022")
  }

}
