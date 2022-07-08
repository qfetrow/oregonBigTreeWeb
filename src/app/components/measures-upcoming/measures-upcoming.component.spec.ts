import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuresUpcomingComponent } from './measures-upcoming.component';

describe('MeasuresUpcomingComponent', () => {
  let component: MeasuresUpcomingComponent;
  let fixture: ComponentFixture<MeasuresUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuresUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasuresUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
