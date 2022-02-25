import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, mergeMap, tap } from 'rxjs';
import { IAuthUser } from 'src/app/pages/login-page/auth-user.model';
import { UserApiService } from '../../api/user.api.service';
import { IUser } from '../../models/user.model';
import * as USER_ACTIONS from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private userApiService: UserApiService
  ) {}
  login$: any = createEffect((): any => {
    return this.actions$.pipe(
      ofType(USER_ACTIONS.login),
      mergeMap(({ email, password }: IAuthUser) =>
        this.userApiService.login(email, password).pipe(
          filter((user: IUser | null) => !!user),
          map((user: IUser | null) => USER_ACTIONS.loginSuccess({ user })),
          catchError((error: any) => [USER_ACTIONS.loginError({ error })])
        )
      )
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(USER_ACTIONS.loginSuccess),
        tap(() => void this.router.navigate(['home']))
      );
    },
    { dispatch: false }
  );
}
