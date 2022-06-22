import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotionService } from 'src/app/shared/services/promotion.service';

@Component({
  selector: 'app-promotion-new',
  templateUrl: './promotion-new.component.html',
  styleUrls: ['./promotion-new.component.css']
})
export class PromotionNewComponent implements OnInit {
  actionBtn: string = "Save"
  promotionForm: FormGroup = new FormGroup({})
  checked = false;
  constructor(
    private promotionService: PromotionService,
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<PromotionNewComponent>) { }



  ngOnInit() {
    this.promotionForm = this.formBuilder.group({
      foodId:['',Validators.required],
      title: ['', Validators.required],
      discountPercent: ['', Validators.required],
      startDate: ['',
        // Validators.compose([DateValidator.dateVaidator, Validators.required])
        Validators.required],
      endDate: ['',
        //  Validators.compose([DateValidator.dateVaidator, Validators.required])
        Validators.required
      ],
      description: ['', Validators.required],

    });

    // if(this.editData){
    //   this.actionBtn="Update";
    //   this.productInput.controls['id'].setValue(this.editData.id);
    //   this.productInput.controls['foodId'].setValue(this.editData.foodId);
    //   this.productInput.controls['categoryId'].setValue(this.editData.categoryId);
    //   this.productInput.controls['title'].setValue(this.editData.title);
    //   this.productInput.controls['discountPercent'].setValue(this.editData.discountPercent);
    //   this.productInput.controls['discountValue'].setValue(this.editData.discountValue);
    //   this.productInput.controls['startDate'].setValue(this.editData.startDate);
    //   this.productInput.controls['endDate'].setValue(this.editData.endDate);
    //   this.productInput.controls['description'].setValue(this.editData.description);
    //   this.productInput.controls['status'].setValue(this.editData.status);

    // }


    if (this.editData) {
      this.actionBtn = "Update";
      this.promotionForm.patchValue(this.editData);

    }


  }


  addPro() {
    if (this.promotionForm.invalid) return;
    if (this.editData) {
      this.promotionService.updatePromotion(this.editData.id, this.promotionForm.value).subscribe(x => {

      })
    } else
      this.promotionService.addPromotion(this.promotionForm.value).subscribe(x => {
      })
  }

}
