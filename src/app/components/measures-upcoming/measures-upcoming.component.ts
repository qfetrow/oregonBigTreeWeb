import { Component, OnInit, Input} from '@angular/core';
import { Measure } from '../../Measure';
import { UpcomingMeasuresService } from '../../services/upcoming-measures.service';

@Component({
  selector: 'app-measures-upcoming',
  templateUrl: './measures-upcoming.component.html',
  styleUrls: ['./measures-upcoming.component.css']
})
export class MeasuresUpcomingComponent implements OnInit {
  
  @Input() committeecode: string = "HRULES"
  measures: Measure[] = [];
  constructor(private measureService: UpcomingMeasuresService) { }

  ngOnInit(): void {
    this.measureService.getMeasures("any", this.committeecode).subscribe( (measuresInitial) => this.measures = measuresInitial.value);
  }

}
