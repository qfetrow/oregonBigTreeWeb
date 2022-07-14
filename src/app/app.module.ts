import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MeasurecardComponent } from './components/measurecard/measurecard.component';
import { MeasuresUpcomingComponent } from './components/measures-upcoming/measures-upcoming.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommitteesComponent } from './components/committees/committees.component';
import { CommitteeCardComponent } from './components/committee-card/committee-card.component';
import { AppRoutingModule } from './app-routing.module';
import { MeasureDetailComponent } from './components/measure-detail/measure-detail.component';
import { TimelineBarComponent } from './components/timeline-bar/timeline-bar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeasurecardComponent,
    MeasuresUpcomingComponent,
    CommitteesComponent,
    CommitteeCardComponent,
    MeasureDetailComponent,
    TimelineBarComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
