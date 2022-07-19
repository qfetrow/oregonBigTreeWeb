import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsmeetingcardComponent } from './csmeetingcard.component';

describe('CsmeetingcardComponent', () => {
  let component: CsmeetingcardComponent;
  let fixture: ComponentFixture<CsmeetingcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsmeetingcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsmeetingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
