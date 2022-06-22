import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductNewComponent } from './product-new/product-new.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import '../../../assets/form.css';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['../../../assets/form.css']
})
export class ProductComponent implements OnInit {
    displayedColumns: string[] = ['foodName', 'averageVote', 'description', 'price', 'categories', 'status', 'images', 'action'];
    dataSource!: MatTableDataSource<any>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    public readonly statusList = [
        { value: 1, text: 'Đang chờ' },
        { value: 2, text: 'Đang giao' }
    ]
    constructor(private dialog: MatDialog, private product: ProductService) {

    }
    ngOnInit(): void {
        this.getAll();
    }
    getAll() {
        this.product.getAll({})
            .subscribe({
                next: (res) => {
                    this.dataSource = res.data.food;
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort
                },
                error: (err) => {
                    console.log(err);

                }
            })
    }
    openDialog() {
        this.dialog.open(ProductNewComponent, {
            width: '30%'
        }).afterClosed().subscribe(val => {
                this.getAll();
        })
    }
    editProduct(row: any) {
        this.dialog.open(ProductNewComponent, {
            width: '30%',
            data: row
        }).afterClosed().subscribe(val => {
                this.getAll();         
        })


    }


    deletePro(id: number) {
        this.product.deleteProduct(id)
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


}
