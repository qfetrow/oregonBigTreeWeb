import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitteesComponent } from './components/committees/committees.component';
import { HomeComponent } from './components/home/home.component';
import { MeasureDetailComponent } from './components/measure-detail/measure-detail.component';
import { MeasuresUpcomingComponent } from './components/measures-upcoming/measures-upcoming.component';
import { MeetingdetailComponent } from './components/meetingdetail/meetingdetail.component';

// Big thanks to Angular's routing tutorial for the code here

const routes: Routes = [
  { path: 'committees', component: CommitteesComponent},
  { path: '', redirectTo: 'committees', pathMatch: 'full' },
  { path: 'committees/:id', component: MeasuresUpcomingComponent },
  { path: 'measures/:sessid/:measureid', component: MeasureDetailComponent},
  {path: 'meetings/:comcode/:date', component: MeetingdetailComponent},
  { path: 'home', component: HomeComponent},
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
