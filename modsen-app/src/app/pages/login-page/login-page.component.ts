import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService } from 'src/app/core/api/user.api.service';
import { UserService } from 'src/app/core/services/user.service';

import { IAuthUser, IUser } from 'src/app/core/models/user.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(
    private router: Router,
    private userApiService: UserApiService,
    private userService: UserService
  ) {}

  login(authUser: IAuthUser): void {
    this.userApiService
      .login(authUser.email, authUser.password)
      .pipe(filter((user: IUser | null) => !!user))
      .subscribe((user: IUser | null) => {
        this.userService.saveUser(user as IUser);
        this.router.navigate(['home']);
      });
  }
}
