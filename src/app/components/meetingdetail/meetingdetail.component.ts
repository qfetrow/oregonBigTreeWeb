import { Component, Input, OnInit } from '@angular/core';
import { CommitteeAgendaItem, Meeting } from 'src/app/Meeting';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MeetingsService } from 'src/app/services/meetings.service';
import { faEdit, faFileLines, faUser, IconDefinition } from '@fortawesome/free-regular-svg-icons';

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

  getIcon(action: string | undefined): IconDefinition {
    if (action) {
      console.log(action)
      if (action.toLowerCase().includes("work")) {
        return faEdit;
      }
      else if (action.toLowerCase().includes("hearing")) {
        return faUser;
      }
    }
    return faFileLines
  }

  getMeasureActionCount() {
    let actionCount = 0
    for(let i = 0; i<this.agendaItems.length; i++) {
      if (this.agendaItems[i].MeasureNumber) {
        actionCount++
      }
    }
    return actionCount
  }

  setColor(mprefix: string) {
    var color = '#fccc94'
    if (mprefix.includes('HB')) {
      color = '#ac9cf4'
    } else if (mprefix.includes('SB')) {
      color = '#b4e4bc'
    }
    let styles = {
      'color': color,
      'font-size': '4em'
    }
    return styles
  }

  goBack(): void {
    this.location.back();
  }

}
