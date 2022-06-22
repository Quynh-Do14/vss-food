import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMonthComponent } from './report-month.component';

describe('ReportMonthComponent', () => {
  let component: ReportMonthComponent;
  let fixture: ComponentFixture<ReportMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
