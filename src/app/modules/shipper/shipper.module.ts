import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipperRoutingModule } from './shipper-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShipperComponent } from './shipper.component';
import { ShipperNewComponent } from './shipper-new/shipper-new.component';
import { ShipperOrderComponent } from './shipper-order/shipper-order.component';
@NgModule({
    declarations: [ShipperComponent, ShipperNewComponent, ShipperOrderComponent],
    imports: [CommonModule, ShipperRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class ShipperModule { }