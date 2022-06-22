import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportService } from 'src/app/shared/services/report.service';
import '../../../../assets/form.css';



@Component({
  selector: 'app-report-year',
  templateUrl: './report-year.component.html',
  styleUrls: ['../../../../assets/form.css']
})
export class ReportYearComponent implements OnInit {
  displayedColumns: string[] = ['ordinal','startDate', 'endDate', 'revenue'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  


  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.reportService.getReportYear({})
    .subscribe({
      next: (res) => {
        this.dataSource = res.data.revenueDetail;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error: (err) => {
        console.log( 'Lỗi',err);

      }
    })
}
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}