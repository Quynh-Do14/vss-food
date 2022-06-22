import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/shared/services/user.service';
import { UserNewComponent } from '../user-new/user-new.component';
import '../../../../assets/form.css';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['../../../../assets/form.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'fullName', 'email',
    'phoneNumber', 'address', 'roleName', 'status', 'createdAt', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public readonly statusList = [
    { value: 0, text: 'Offline' },
    { value: 1, text: 'Online' }
]
  constructor(
    private dialog: MatDialog,
    private userSevice: UserService,
) {
  }

  ngOnInit(): void {
    this.getAll()
  }
  
  getAll() {
    this.userSevice.getUser({})
      .subscribe({
        next: (res) => {
          this.dataSource = res.data.users;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.log( 'Lỗi',err);

        }       
      })

  }
  openDialog() {
    this.dialog.open(UserNewComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
        this.getAll();
    })
  }
  onEdit(row: any) {
    this.dialog.open(UserNewComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      this.getAll()
    })
  }

  deleteUser(id: number) {
    this.userSevice.deleteUser(id)
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
