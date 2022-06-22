import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { AuthRoutingModule } from './auth.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
    declarations: [
        LoginComponent, 
        ForgotPasswordComponent, 
        NotFoundComponent,

    ],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        NgToastModule,
        ToastrModule
    ],
})
export class AuthModule { }