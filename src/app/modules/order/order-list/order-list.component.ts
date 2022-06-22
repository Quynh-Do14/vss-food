import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderNewComponent } from '../order-new/order-new.component';
import '../../../../assets/form.css';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['../../../../assets/form.css']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['customerName', 'address', 'phoneNumber', 'price', 'orderCode', 'orderDate', 'status', 'completeAt', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public readonly statusList = [
    { value: 0, text: 'Hủy bỏ' },
    { value: 1, text: 'Chờ xác nhận' },
    { value: 2, text: ' Chuẩn bị đồ ăn' },
    { value: 3, text: 'Chờ giao hàng' },
    { value: 4, text: 'Đang giao hàng' },
    { value: 5, text: 'Giao hàng thành công' },

]
  constructor(private dialog: MatDialog, private order: OrderService) {

  }
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.order.getAllOrder({})
      .subscribe({
        next: (res) => {
          this.dataSource = res.data.orders;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (err) => {
          console.log('Lỗi', err);

        }
      })
  }
  editOrder(row: any) {
    this.dialog.open(OrderNewComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      this.getAll();
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
