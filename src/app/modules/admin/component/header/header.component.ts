import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  user: any
  constructor(private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder
    ) { }
  ngOnInit(): void {
    this.auth.curentUser.subscribe(
      data =>{
        this.user= data
        console.log('usert', this.user);
        
      }
    )

   }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  onLogout(){
    this.auth.logout();
  }

}
