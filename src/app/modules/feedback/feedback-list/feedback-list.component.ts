import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FeedbackService } from 'src/app/shared/services/feedback.service';
import '../../../../assets/form.css';
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['../../../../assets/form.css']
})
export class FeedbackListComponent implements OnInit {
  displayedColumns: string[] = ['feedback', 'createDate', 'userId'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private feedback: FeedbackService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.feedback.getFeedback({})
      .subscribe({
        next: (res) => {
          this.dataSource = res.data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (err) => {
          console.log(err);

        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
