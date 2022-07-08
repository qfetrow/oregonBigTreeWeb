import { Component, OnInit } from '@angular/core';
import { Measure } from '../../Measure';
import { UpcomingMeasuresService } from '../../services/upcoming-measures.service';

@Component({
  selector: 'app-measures-upcoming',
  templateUrl: './measures-upcoming.component.html',
  styleUrls: ['./measures-upcoming.component.css']
})
export class MeasuresUpcomingComponent implements OnInit {
  
  measures: Measure[] = [];
  constructor(private measureService: UpcomingMeasuresService) { }

  ngOnInit(): void {
    this.measureService.getMeasures().subscribe( (measuresInitial) => this.measures = measuresInitial.value);
  }

}
