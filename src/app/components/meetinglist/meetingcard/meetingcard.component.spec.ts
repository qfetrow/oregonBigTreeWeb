import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingcardComponent } from './meetingcard.component';

describe('MeetingcardComponent', () => {
  let component: MeetingcardComponent;
  let fixture: ComponentFixture<MeetingcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
