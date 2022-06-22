import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  actionBtn: string = "Save"
  userForm: FormGroup = new FormGroup({})
  checked = false;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<UserNewComponent>) { }



  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required ,],
      email: ['', Validators.required],
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required , 
      // Validators.pattern('^(0|\\+\\d{1,3})[0-9]{9}')
    ],
      address: ['', Validators.required],

    });


    if (this.editData) {
      this.actionBtn = "Update";
      this.userForm.patchValue(this.editData)
    }
  }

  addPro() {
    debugger
    if (this.userForm.invalid) return;
     (this.editData) 
      this.userService.updateUser( this.userForm.value).subscribe(x => {
      })
      debugger
  }

}
