import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [ProductComponent, ProductNewComponent],
    imports: [CommonModule, ProductRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class ProductModule { }