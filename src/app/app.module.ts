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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeasurecardComponent,
    MeasuresUpcomingComponent,
    CommitteesComponent,
    CommitteeCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
