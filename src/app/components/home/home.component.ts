import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selected: Date = new Date();
  selectedarr: Date[] = [this.selected];

  constructor() { }

  ngOnInit(): void {
  }

  updateComp() {
    this.selectedarr = [this.selected]
  }

}
