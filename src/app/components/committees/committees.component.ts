import { Component, OnInit } from '@angular/core';
import { Committee } from '../../Committee'
import { CommitteesGetService } from '../../services/committees-get.service';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})
export class CommitteesComponent implements OnInit {

  allCommittees: Committee[] = [];
  houseCommittees: Committee[] = [];
  senateCommittees: Committee[] = [];
  jointCommittees: Committee[] = [];

  constructor(private committeeService: CommitteesGetService) { }

  ngOnInit(): void {
      this.committeeService.getCommittees().subscribe( (committeesInitial) => {
        for (let i = 0; i < committeesInitial.value.length; i++) {
          console.log("Initial read")
          let committee = committeesInitial.value[i];
          switch(committee.HouseOfAction) {
            case "H":
              // House committee
              console.log(committee.CommitteeName)
              this.houseCommittees.push(committee);
              break;
            case "S":
              // Senate committee
              this.senateCommittees.push(committee);
              break;
            case "J":
              // Joint committee
              this.jointCommittees.push(committee);
          }
        }
      })
  }

}
