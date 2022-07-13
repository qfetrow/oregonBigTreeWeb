import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Measure } from '../../Measure';
import { UpcomingMeasuresService } from '../../services/upcoming-measures.service';
import { CommitteesGetService } from 'src/app/services/committees-get.service';
import { Committee } from 'src/app/Committee';

@Component({
  selector: 'app-measures-upcoming',
  templateUrl: './measures-upcoming.component.html',
  styleUrls: ['./measures-upcoming.component.css']
})
export class MeasuresUpcomingComponent implements OnInit {
  
  committee: Committee[] = [];
  measures: Measure[] = [];
  constructor( private committeeService: CommitteesGetService, private measureService: UpcomingMeasuresService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    let committeecode = this.route.snapshot.paramMap.get('id');
    if (committeecode == null) {
      committeecode = "";
    } else {
      this.committeeService.committeeFromCode(committeecode).subscribe( (committeesInitial) => this.committee = committeesInitial.value);
    }
    this.measureService.getMeasures("any", committeecode).subscribe( (measuresInitial) => this.measures = measuresInitial.value);
  }

  goBack(): void {
    this.location.back();
  }

}
