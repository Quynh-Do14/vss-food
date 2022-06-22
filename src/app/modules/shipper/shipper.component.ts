import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ShipperService } from 'src/app/shared/services/shipper.service';
import '../../../assets/form.css';
import { ShipperNewComponent } from './shipper-new/shipper-new.component';
import { ShipperOrderComponent } from './shipper-order/shipper-order.component';
@Component({
    selector: 'app-shipper',
    templateUrl: './shipper.component.html',
    styleUrls: ['../../../assets/form.css']
})
export class ShipperComponent implements OnInit {
    displayedColumns: string[] = [ 'name', 'phone', 'status', 'action'];
    dataSource!: MatTableDataSource<any>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    public readonly statusList = [
        { value: 1, text: 'Offline' },
        { value: 2, text: 'Online' }
    ]
    constructor(private dialog: MatDialog, private shipper: ShipperService) {

    }
    ngOnInit(): void {
        this.findAll();
    }
    findAll() {
        this.shipper.findAll({})
            .subscribe({
                next: (res) => {
                    this.dataSource = res.data.shippers;
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort
                },
                error: (err) => {
                    console.log(err);

                }
            })
    }
    openDialog() {
        this.dialog.open(ShipperNewComponent, {
            width: '30%'
        }).afterClosed().subscribe(val => {
                this.findAll();
            
        })
    }
    editShipper(row: any) {
        this.dialog.open(ShipperNewComponent, {
            width: '30%',
            data: row
        }).afterClosed().subscribe(val => {
                this.findAll();
        
        })


    }


    deleteShiper(id: number) {
        this.shipper.deleteShipper(id)
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
    shiper(row: any) {
        this.dialog.open(ShipperOrderComponent, {
            width: '30%',
            data: row
        }).afterClosed().subscribe(val => {
            if (val === "update") {
                this.findAll();
            }
        })
    }

}
