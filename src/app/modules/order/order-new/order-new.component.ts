import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css']
})
export class OrderNewComponent implements OnInit {
  actionBtn: string = "Save"
  orderForm: FormGroup = new FormGroup({})
  checked = false;
  list = [{ id: 0, name: 'Hủy bỏ' }, { id: 1, name: 'Chờ xác nhận' }, { id: 2, name: 'Chuẩn bị đồ ăn' }, { id: 3, name: 'Chờ giao hàng' }, { id: 4, name: ' Đang giao hàng' }, { id: 5, name: ' Giao hàng thành công' }]
  orderDetailList!: FormArray;
  constructor(
    private order: OrderService,
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<OrderNewComponent>) { }



  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      status: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = "Update";

      this.orderForm.patchValue(this.editData);

    }
  }


  addOrder() {
    if (this.orderForm.invalid) return;
    if (this.editData) {
      this.order.updateOrder(this.editData.id, this.orderForm.value.status).subscribe(x => {
      })
    }

  }
}
