import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShipperService } from 'src/app/shared/services/shipper.service';
@Component({
  selector: 'app-shipper-new',
  templateUrl: './shipper-new.component.html',
  styleUrls: ['./shipper-new.component.css']
})
export class ShipperNewComponent implements OnInit {
  actionBtn: string = "Save"
  shipperForm: FormGroup = new FormGroup({})
  checked = false;
  constructor(
    private shipper: ShipperService,
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<ShipperNewComponent>) { }



  ngOnInit() {
    this.shipperForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = "Update";
      this.shipperForm.patchValue(this.editData);

    }
  }

  addShipper() {
    if (this.shipperForm.invalid) return;
    if (this.editData) {
      this.shipper.updateShipper(this.editData.id, this.shipperForm.value).subscribe(x => {

      })
    } else
      this.shipper.addShipper(this.shipperForm.value).subscribe(x => {
      })
  }


}