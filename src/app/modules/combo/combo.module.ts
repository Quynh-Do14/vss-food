import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboListComponent } from './combo-list/combo-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComboRoutingModule } from './combo.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';
import { ComboNewComponent } from './combo-new/combo-new.component';



@NgModule({
  declarations: [
    ComboListComponent,
    ComboNewComponent

  ],
  imports: [
    CommonModule,
    ComboRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule 
  ]
})
export class ComboModule { }
