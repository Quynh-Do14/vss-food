import { Component } from '@angular/core';
import { Post } from './shared/post-Interface/post';
import { Role } from './shared/auth/roles';
import { AuthService } from './shared/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post!: Post

  constructor(private auth: AuthService) {
    this.auth.curentUser.subscribe(
      x => (this.post = x)
    );
  }

  title = 'demo';
  get isAdmin() {
    return this.post && this.post.roleName === Role.Admin;
}

}
