import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryNewComponent } from './category-new/category-new.component';

import { CategoryService } from 'src/app/shared/services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['categoryName', 'categoryCode', 'createdDate', 'modifiedDate', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private category: CategoryService) {

  }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.category.findAll({})
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
  openDialog() {
    this.dialog.open(CategoryNewComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      this.findAll();
    })
  }
  editcategory(row: any) {
    this.dialog.open(CategoryNewComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      this.findAll();
    })


  }


  deleteCategory(id: number) {
    this.category.deleteCate(id)
      .subscribe({
        next: (res) => {
          alert("Cập nhật thành công");
          this.findAll();
        },
        error: () => {
          alert("Xin lỗi cập nhật thất bại")
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
