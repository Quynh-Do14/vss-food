import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first, switchMap, tap } from 'rxjs';
import { AlertService } from 'src/app/shared/auth/alert.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Role } from 'src/app/shared/auth/roles';
import { Post } from 'src/app/shared/post-Interface/post';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  post!: Post;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private routerActivated: ActivatedRoute,
    private alertService: AlertService,
    private toaster: NgToastService
  ) {
    if (this.auth.currentUserValue) {
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.returnUrl = this.routerActivated.snapshot.queryParams['returnUrl'] || '/admin';


  }

  get f(): any {
    return this.loginForm.controls;
  }

  onLogin() {
    this.submitted = true;
    this.alertService.clear();
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.auth.login(this.f.username.value, this.f.password.value)
      .pipe(
        switchMap(() => {
          return this.auth.getUser(this.f.username.value)
        }))
      .subscribe(

        data => {
          window.location.reload();
          this.auth.setCurrentUser(data.data)
          this.router.navigate(['/admin']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false
          alert('Đăng nhập ko thành công')
          this.toaster.error({detail:"ERROR",summary:'Your Error Message',sticky:true});
        }

      )


    // this.auth.login(this.f.username.value, this.f.password.value)
    // .pipe(first())
    // .subscribe({
    //     next: () => {
    //         // get return url from query parameters or default to home page
    //         const returnUrl = this.routerActivated.snapshot.queryParams['returnUrl'] || '/admin';
    //         this.router.navigateByUrl(returnUrl);
    //     },
    //     error: error => {
    //         this.error = error;
    //         this.loading = false;
    //     }
    // });

  }






}
