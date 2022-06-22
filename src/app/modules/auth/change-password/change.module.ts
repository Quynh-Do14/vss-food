import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';
import { ChangeRoutingModule } from './change.routing.module';



@NgModule({
  declarations: [
    ChangePasswordComponent,

  ],
  imports: [
    ChangeRoutingModule,
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export class ChangeModule { }
