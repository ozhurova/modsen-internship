import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService } from 'src/app/core/api/user.api.service';
import { UserService } from 'src/app/core/services/user.service';

import { IAuthUser } from './auth-user.model';

import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import * as USER_ACTIONS from '../../core/store/user/user.actions';

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
    private store$: Store // @Inject(USER_STORE_SERVICE) // private userStoreService: UserStoreService
  ) {}

  login(authUser: IAuthUser): void {
    // this.userStoreService.login(authUser.email, authUser.password)
    this.store$.dispatch(USER_ACTIONS.login(authUser));

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
