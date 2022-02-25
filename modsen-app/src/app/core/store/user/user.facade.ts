import { Injectable, InjectionToken } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IUser } from '../../models/user.model';

import * as USER_ACTIONS from './user.actions';
import { IAppState } from './user.reducer';
import { selectUser } from './user.selectors';

export interface IUserFacade {
  user$: Observable<IUser | null>;
  login(email: string, password: string): void;
  // logout(): void
}

export const USER_FACADE = new InjectionToken<IUserFacade>('USER_FACADE');

@Injectable()
export class UserFacade implements IUserFacade {
  user$ = this.store$.select(selectUser);

  constructor(private store$: Store<IAppState>) {}

  login(email: string, password: string): void {
    this.store$.dispatch(USER_ACTIONS.login({ email, password }));
  }

  // logout(): void {
  //   this.store$.dispatch(USER_ACTIONS.logout())
  // }
}
