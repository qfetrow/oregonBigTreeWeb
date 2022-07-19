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
  fday: Date = new Date()
  second: Boolean = false
  sday: Date = new Date()
  third: string = "not"
  thday: Date = new Date()
  signed: Boolean = false
  signday: Date = new Date()

  ngOnInit(): void {
    for(let i = this.measureactions.length-1; i >=0  ; i--) {
      console.log(i)
      let atext =this.measureactions[i].ActionText.toLowerCase() 
      if (atext.includes("first")) {
        this.first = true
        this.fday = new Date(this.measureactions[i].ActionDate)
      } 
      if (atext.includes("second")) {
        this.second = true
        this.sday = new Date(this.measureactions[i].ActionDate)
      }
      if (atext.includes("third")) {
        if (atext.includes("passed")) {
          this.third = "pass"
        } else {
          this.third = "nopass"
        }
        this.thday = new Date(this.measureactions[i].ActionDate)
      }
      if (atext.includes("governor signed")) {
        this.signed = true
        this.signday = new Date(this.measureactions[i].ActionDate)
      }
    }

  }

}
