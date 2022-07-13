import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Measure, DocumentData } from 'src/app/Measure';
import { Location } from '@angular/common';
import { UpcomingMeasuresService } from 'src/app/services/upcoming-measures.service';
import { MeasureAction } from 'src/app/MeasureAction';
import { MeasureActionsService } from 'src/app/services/measure-actions.service';
import { faWarning } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-measure-detail',
  templateUrl: './measure-detail.component.html',
  styleUrls: ['./measure-detail.component.css']
})
export class MeasureDetailComponent implements OnInit {
  faError = faWarning;
  measures: Measure[] = []
  measureactions: MeasureAction[] = []
  measuredocument: DocumentData[] = []
  constructor(private route: ActivatedRoute, private location: Location, private measureService: UpcomingMeasuresService, private measureActionService: MeasureActionsService) { }

  ngOnInit(): void {
    var sesskey = this.route.snapshot.paramMap.get('sessid');
    // Measure number and prefix, e.g "HB-4030"
    let mprenum = this.route.snapshot.paramMap.get('measureid');
    // Separate into an array pair of prefix and number, e.g ["HB", "4030"]
    let prenumpair = mprenum?.split('-')
    console.log(prenumpair)
    if (prenumpair?.length == 2 && sesskey != null) {
      this.measureService.getMeasures(sesskey, undefined, prenumpair[1], prenumpair[0]).subscribe((measuresInitial) => this.measures = measuresInitial.value)
      this.measureService.getDocument(sesskey, prenumpair[0], prenumpair[1]).subscribe((mdocInit) => this.measuredocument = mdocInit.value)
      this.measureActionService.getActions(sesskey, prenumpair[0], prenumpair[1]).subscribe((mactionInitial) => this.measureactions = mactionInitial.value)
    }
  }

  goBack(): void {
    this.location.back()
  }

}
