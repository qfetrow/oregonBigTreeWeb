import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurecardComponent } from './measurecard.component';

describe('MeasurecardComponent', () => {
  let component: MeasurecardComponent;
  let fixture: ComponentFixture<MeasurecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
