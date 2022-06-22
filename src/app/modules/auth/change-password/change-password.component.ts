import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { ForgetService } from 'src/app/shared/auth/forget.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogPasswordComponent } from '../dialog-password/dialog-password.component';
import '../login/login.component.css'
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['../login/login.component.css']
})

export class ChangePasswordComponent implements OnInit {

  formChange: FormGroup = new FormGroup({})
  user: any;
  isDisabled: any;
  constructor(
    private forgetService: ForgetService,
    private formBuilder: FormBuilder,
    private auth : AuthService,
    private dialog: MatDialog,
    private router: Router,

    ) { }

  ngOnInit(): void {
    this.formChange = this.formBuilder.group({
      username: [{value: '', disabled: this.isDisabled}, Validators.required],
      newPassword: ['', Validators.required, ],
      oldPassword: ['', Validators.required,  ]
    })

    this.auth.curentUser.subscribe(
      data => {
        this.user = data
        console.log('user', this.user);

      }
    )
  }


  onChangePass() {
    return this.forgetService.changePassword(this.formChange.value)
      .subscribe(
        data => {
          console.log(data);
          alert('Đổi mật khẩu thành công')
          this.auth.logout()
        },
        err =>{
          alert('Đổi mật khẩu thật bại')
        }
      )

  }

}