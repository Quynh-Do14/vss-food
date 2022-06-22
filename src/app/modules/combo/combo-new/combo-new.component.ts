import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ComboService } from 'src/app/shared/services/combo.service';

@Component({
  selector: 'app-combo-new',
  templateUrl: './combo-new.component.html',
  styleUrls: ['./combo-new.component.css']
})
export class ComboNewComponent implements OnInit {
  actionBtn: string = "Save"
  productInput: FormGroup = new FormGroup({})
  checked = false;
  foodList!: FormArray;
  constructor(
    private comboService: ComboService,
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<ComboNewComponent>) { }



  ngOnInit() {
    this.productInput = this.formBuilder.group({
      comboDesc: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      foodList: this.formBuilder.array([]

      )
    });

    if (this.editData) {
      this.actionBtn = "Update";
      // this.productInput.controls['name'].setValue(this.editData.name);
      // this.productInput.controls['age'].setValue(this.editData.age);
      // this.productInput.controls['status'].setValue(this.editData.status);
      this.productInput.patchValue(this.editData);

    }
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      numberItem: '',
      foodId: ''
    })
  };
  addItem(): void {
    this.foodList = this.productInput.get('foodList') as FormArray;
    this.foodList.push(this.createItem());
  }
  get formArr() {
    return this.productInput.get("foodList") as FormArray;
  }
  addPro() {
    if (this.productInput.invalid) return;
    if (this.editData) {
      this.comboService.updateCombo(this.editData.id, this.productInput.value).subscribe(x => {

      })
    } else
      this.comboService.addCombo(this.productInput.value).subscribe(x => {
      })
  }


}
