import { Component, OnInit, Input } from '@angular/core';
import { Committee } from 'src/app/Committee';

@Component({
  selector: 'app-committee-card',
  templateUrl: './committee-card.component.html',
  styleUrls: ['./committee-card.component.css']
})
export class CommitteeCardComponent implements OnInit {

  @Input() committee: Committee = {} as Committee
  constructor() { }

  ngOnInit(): void {
  }

}
