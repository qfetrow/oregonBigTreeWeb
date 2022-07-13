import { Component, OnInit, Input } from '@angular/core';
import { MeasureAction } from 'src/app/MeasureAction';
@Component({
  selector: 'app-timeline-bar',
  templateUrl: './timeline-bar.component.html',
  styleUrls: ['./timeline-bar.component.css']
})
export class TimelineBarComponent implements OnInit {

  constructor() { }
  @Input() measureactions: MeasureAction[] = []
  first: Boolean = false
  second: Boolean = false
  third: string = "not"
  signed: Boolean = false

  ngOnInit(): void {
    for(let i = 0; i < this.measureactions.length; i++) {
      console.log(i)
      let atext =this.measureactions[i].ActionText.toLowerCase() 
      if (atext.includes("first")) {
        this.first = true
      } 
      if (atext.includes("second")) {
        this.second = true
      }
      if (atext.includes("third")) {
        if (atext.includes("passed")) {
          this.third = "pass"
        } else {
          this.third = "nopass"
        }
      }
      if (atext.includes("governor signed")) {
        this.signed = true
      }
    }

  }

}
