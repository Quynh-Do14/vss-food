import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDayComponent } from './report-day/report-day.component';
import { ReportHomeComponent } from './report-home/report-home.component';
import { ReportMonthComponent } from './report-month/report-month.component';
import { ReportQuarterComponent } from './report-quarter/report-quarter.component';
import { ReportYearComponent } from './report-year/report-year.component';
import { ReportDaytodayComponent } from './report-daytoday/report-daytoday.component';
import { ReportRoutingModule } from './report.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    ReportDayComponent,
    ReportHomeComponent,
    ReportMonthComponent,
    ReportQuarterComponent,
    ReportYearComponent,
    ReportDaytodayComponent,

  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule 
  ]
})
export class ReportModule { }
