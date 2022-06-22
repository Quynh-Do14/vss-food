import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

  categoryForm !: FormGroup;
  actionBtn: string = "Save"
  constructor(private formBuilder: FormBuilder, private category: CategoryService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<CategoryNewComponent>) {

  }

  ngOnInit() {


    this.categoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
    });
    if (this.editData) {
      this.actionBtn = "Update";
      this.categoryForm.patchValue({ ...this.editData, categoryName: this.editData.categoryName });
    }

  }

  addCategory() {
    if (this.categoryForm.invalid) return;
    if (this.editData) {
      this.category.updateCate(this.editData.id, { ...this.categoryForm.value, id: this.editData.id }).subscribe(x => {

      })
    } else
      this.category.addCategory(this.categoryForm.value).subscribe(x => {
      })
  }
}
