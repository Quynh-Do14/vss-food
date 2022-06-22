import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ForgetService } from 'src/app/shared/auth/forget.service';
import { DialogPasswordComponent } from '../dialog-password/dialog-password.component';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})


export class ForgotPasswordComponent implements OnInit {

  formForget : FormGroup =new FormGroup({})

  constructor(private forgetService: ForgetService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,) { }

  ngOnInit() {
    this.formForget= this.formBuilder.group({
      email:['', Validators.required]
    })
  }

  onForget(){
    return this.forgetService.forgetPassword(this.formForget.value)
    .subscribe(
      err=>{
        console.log(err);
        alert('Mật khẩu mới đã được chuyển vào Email')
        this.router.navigate(['/login'])
      }
    )

  }


}
