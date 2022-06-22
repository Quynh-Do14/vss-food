import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { PromotionNewComponent } from './promotion-new/promotion-new.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromotionRoutingModule } from './promotion.routing.module';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    PromotionListComponent,
    PromotionNewComponent
  ],
  imports: [
    CommonModule,
    PromotionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule 
  ]
})
export class PromotionModule { }
