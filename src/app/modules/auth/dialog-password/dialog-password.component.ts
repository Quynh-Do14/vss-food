import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-dialog-password',
  templateUrl: './dialog-password.component.html',
  styleUrls: ['./dialog-password.component.css']
})
export class DialogPasswordComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.auth.logout()
  }
}
