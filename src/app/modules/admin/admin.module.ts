import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutContentComponent } from 'src/app/layouts/layout-content/layout-content.component';
import { HeaderComponent } from './component/header/header.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ProductModule } from '../product/product.module';
import { CategoryModule } from '../category/category.module';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarchartComponent } from './component/home/barchart/barchart.component';
import { LinechartComponent } from './component/home/linechart/linechart.component';
import { DoughnutchartComponent } from './component/home/doughnutchart/doughnutchart.component';



@NgModule({
    declarations: [LayoutContentComponent,
        HeaderComponent,
        HomeComponent,
        HomeComponent,
        AboutComponent,
        SidenavComponent,
        BarchartComponent,
        LinechartComponent,
        DoughnutchartComponent


    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        ProductModule,
        FormsModule,
        ReactiveFormsModule,
        CategoryModule,
        ChartsModule
    ],
})
export class AdminModule { }