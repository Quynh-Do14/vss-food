import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  actionBtn: string = "Save"
  productFood: FormGroup = new FormGroup({})

  constructor(
    private product: ProductService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<ProductNewComponent>) { }



  ngOnInit() {
    this.productFood = this.formBuilder.group({
      foodName: ['', Validators.required],
      categories: ['', Validators.required],
      description: ['', Validators.required],
      images: [[], Validators.required],
      price: ['', Validators.required]
    });
    if (this.editData) {
      this.actionBtn = "Update";
      this.productFood.patchValue(this.editData);

    }
    this.getCategory();
  }

  addProduct() {
    if (this.productFood.invalid) return;
    let body = new FormData();
    body.append('images', this.file);
    body.append('price', this.productFood.get('price')?.value)
    body.append('food-name', this.productFood.get('foodName')?.value)
    body.append('description', this.productFood.get('description')?.value)
    body.append('category-id', this.productFood.get('categories')?.value)
    if (this.editData) {
      const params = {
        'id': this.editData.id,
        'category-id': this.productFood.get('categories')?.value,
        'food-name': this.productFood.get('foodName')?.value,
        'description': this.productFood.get('description')?.value,
        'price': this.productFood.get('price')?.value
      };
      const data = new FormData();
      data.append('images', this.file || this.productFood.get('images')?.value);
      this.product.updateProduct(this.editData.id, params, data).subscribe(x => {

      })
    } else
      this.product.addProduct(body).subscribe(x => {
      })
  }
  file: any;
  upload(event: any) {
    this.file = event.target.files[0];
  }
  // handleFileSelect(evt: any) {
  //   var files = evt.target.files;
  //   var file = files[0];

  //   if (files && file) {
  //     var reader = new FileReader();

  //     reader.onload = this._handleReaderLoaded.bind(this);

  //     reader.readAsBinaryString(file);
  //   }
  // }



  // _handleReaderLoaded(readerEvt: any) {
  //   var binaryString = readerEvt.target.result;
  //   this.productFood.get('images')?.setValue([btoa(binaryString)]);

  // }
  categoryList: any[] = [];

  getCategory() {
    this.categoryService.getCategory().subscribe(x => {
      this.categoryList = x.data;
    })
  }
}


