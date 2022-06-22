import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ComboNewComponent } from '../combo-new/combo-new.component';
import '../../../../assets/form.css';
import { ComboService } from 'src/app/shared/services/combo.service';

@Component({
  selector: 'app-combo-list',
  templateUrl: './combo-list.component.html',
  styleUrls: ['../../../../assets/form.css']
})
export class ComboListComponent implements OnInit {
  displayedColumns: string[] = [ 'comboDesc', 'name', 'price', 'foods', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private comboService: ComboService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.comboService.getAll({})
      .subscribe({
        next: (res) => {
          this.dataSource = res.data.combos.map((x: any) => ({ ...x, foods: x.foodList.map((y: any) => (y.food.foodName + '/' + y.numberItem)) }));

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (err) => {
          console.log(err);

        }
      })
  }
  openDialog() {
    this.dialog.open(ComboNewComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
        this.getAll();
    })
  }
  onEdit(row: any) {
    this.dialog.open(ComboNewComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
        this.getAll();
      
    })


  }


  deleteCombo(id: number) {
    this.comboService.deleteCombo(id)
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
