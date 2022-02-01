import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { UserApiService } from 'src/app/core/api/user.api.service';
import { UserService } from 'src/app/core/services/user.service';

import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(
    private router: Router,
    private userApiService: UserApiService,
    private userService: UserService,
  ) {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  login(): void {
    this.userApiService.login(this.email.value, this.password.value)
      .subscribe((user: IUser | null) => {
        if (user) {
          this.userService.saveUser(user);
          this.router.navigate(['choose-tests']);
        }
      });
  }
}
