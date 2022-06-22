import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportMonthComponent } from '../report-month/report-month.component';
import { ReportYearComponent } from '../report-year/report-year.component';

@Component({
  selector: 'app-report-home',
  templateUrl: './report-home.component.html',
  styleUrls: ['./report-home.component.css']
})
export class ReportHomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogYear() {
    this.dialog.open(ReportYearComponent, {
      width: '80%',
      height:'80%'
    })
  }

  openDialogMonth() {
    this.dialog.open(ReportMonthComponent, {
      width: '80%',
      height:'80%'
    })
  }
}
