import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order.service';
import { ShipperService } from 'src/app/shared/services/shipper.service';
import { ShipperNewComponent } from '../shipper-new/shipper-new.component';

@Component({
  selector: 'app-shipper-order',
  templateUrl: './shipper-order.component.html',
  styleUrls: ['./shipper-order.component.css']
})
export class ShipperOrderComponent implements OnInit {
  actionBtn: string = "Save"
  orderList: any[] = []
  shipperForm: FormGroup = new FormGroup({})
  checked = false;
  constructor(
    private shipper: ShipperService,
    private formBuilder: FormBuilder,
    private router: Router,
    private order: OrderService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<ShipperNewComponent>) { }


  ngOnInit() {
    this.shipperForm = this.formBuilder.group({
      orderId: ['', Validators.required],
      id: ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "Update";
      this.shipperForm.patchValue(this.editData);

    }
    this.order.getOrder(3).subscribe(x => {
      this.orderList = x.data
    })
  }

  orderShipper() {
    if (this.shipperForm.invalid) return;
    this.shipper.assignShipper(this.shipperForm.value).subscribe(x => {

    });
  }


}
