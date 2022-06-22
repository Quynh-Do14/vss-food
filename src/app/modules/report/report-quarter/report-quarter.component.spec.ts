import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportQuarterComponent } from './report-quarter.component';

describe('ReportQuarterComponent', () => {
  let component: ReportQuarterComponent;
  let fixture: ComponentFixture<ReportQuarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportQuarterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
