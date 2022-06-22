import { Component, OnInit, ViewChild } from '@angular/core';
import { PromotionService } from 'src/app/shared/services/promotion.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PromotionNewComponent } from '../promotion-new/promotion-new.component';
import '../../../../assets/form.css';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['../../../../assets/form.css']
})
export class PromotionListComponent implements OnInit {
  displayedColumns: string[] = [ 'title', 'discountPercent', 
    'status', 'description', 'startDate', 'endDate', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.getAll();

  }
  getAll() {
    this.promotionService.getAll({})
      .subscribe({
        next: (res) => {
          this.dataSource = res.data.promotions;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (err) => {
          console.log('Lỗi', err);

        }
      })
  }
  openDialog() {
    this.dialog.open(PromotionNewComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {

        this.getAll();
      
    })
  }
  onEdit(row: any) {
    this.dialog.open(PromotionNewComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {

        this.getAll();
      
    })


  }


  deleteProduct(id: number) {
    this.promotionService.deletePromotion(id)
      .subscribe({
        next: (res) => {
          alert("Cập nhật thành công");
          this.getAll();
        },
        error: () => {
          alert("Xin lỗi cập nhật thất bại")
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
