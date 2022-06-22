import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDaytodayComponent } from './report-daytoday.component';

describe('ReportDaytodayComponent', () => {
  let component: ReportDaytodayComponent;
  let fixture: ComponentFixture<ReportDaytodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDaytodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDaytodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
