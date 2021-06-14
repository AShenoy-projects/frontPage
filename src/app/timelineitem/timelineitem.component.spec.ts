import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineitemComponent } from './timelineitem.component';

describe('TimelineitemComponent', () => {
  let component: TimelineitemComponent;
  let fixture: ComponentFixture<TimelineitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
