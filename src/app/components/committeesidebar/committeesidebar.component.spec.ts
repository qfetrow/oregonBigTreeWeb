import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteesidebarComponent } from './committeesidebar.component';

describe('CommitteesidebarComponent', () => {
  let component: CommitteesidebarComponent;
  let fixture: ComponentFixture<CommitteesidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteesidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitteesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
