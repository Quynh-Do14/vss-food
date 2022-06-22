import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryRoutingModule } from './category-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [CategoryComponent, CategoryNewComponent],
    imports: [CommonModule, CategoryRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class CategoryModule { }