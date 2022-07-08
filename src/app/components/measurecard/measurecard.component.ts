import { Component, OnInit, Input } from '@angular/core';
import { Measure } from 'src/app/Measure';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-measurecard',
  templateUrl: './measurecard.component.html',
  styleUrls: ['./measurecard.component.css']
})
export class MeasurecardComponent implements OnInit {

  @Input() measure: Measure = {} as Measure;
  faFileLines = faFileLines;

  constructor() { }
  ngOnInit(): void {
  }

  setColor() {
    var color = '#fccc94'
    if (this.measure.MeasurePrefix.includes('HB')) {
      color = '#ac9cf4'
    } else if (this.measure.MeasurePrefix.includes('SB')) {
      color = '#b4e4bc'
    }
    let styles = {
      'color': color,
      'font-size': '4em'
    }
    return styles
  }

}
