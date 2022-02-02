import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { UserApiService } from 'src/app/core/api/user.api.service';
import { UserService } from 'src/app/core/services/user.service';

import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(
    private router: Router,
    private userApiService: UserApiService,
    private userService: UserService,
  ) {
  }

  login(form: FormGroup): void {
    if (form.valid) {
      this.userApiService.login(form.value.email as string, form.value.password as string)
        .subscribe((user: IUser | null) => {
          if (user) {
            this.userService.saveUser(user);
            this.router.navigate(['home-page']);
          }
        });
    }
  }
}
