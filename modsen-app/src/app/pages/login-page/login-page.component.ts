import { Component, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService } from 'src/app/core/api/user.api.service';
import { UserService } from 'src/app/core/services/user.service';

import { IAuthUser } from './auth-user.model';

import { Subscription } from 'rxjs';

import { UserFacade, USER_FACADE } from 'src/app/core/store/user/user.facade';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnDestroy {
  private subscription$: Subscription | null = null;

  constructor(
    private router: Router,
    private userApiService: UserApiService,
    private userService: UserService,
    @Inject(USER_FACADE)
    private userFacade: UserFacade
  ) {}

  login(authUser: IAuthUser): void {
    this.userFacade.login(authUser.email, authUser.password);

    // this.subscription$ = this.userApiService
    //   .login(authUser.email, authUser.password)
    //   .pipe(filter((user: IUser | null) => !!user))
    //   .subscribe((user: IUser | null) => {
    //     this.userService.saveUser(user as IUser);
    //     this.router.navigate(['home']);
    //   });
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }
}
