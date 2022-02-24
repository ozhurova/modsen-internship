import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, filter, map, mergeMap, tap } from "rxjs";
import { UserApiService } from "../../api/user.api.service";
import * as USER_ACTIONS from './user.actions'

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private userApiService: UserApiService,
  ) {}
  login$: any = createEffect(():any => this.actions$.pipe(
    ofType(USER_ACTIONS.login),
    mergeMap( ({email, password}) => this.userApiService.login(email, password).pipe(
      map((user: any) => USER_ACTIONS.loginSuccess({user})),
      catchError((error: any) => [
        USER_ACTIONS.loginError({ error })
      ])
    ))
  ))

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(USER_ACTIONS.loginSuccess),
    filter(user => !!user),
    tap(() => this.router.navigate(['home']))
  ), { dispatch: false })
}

