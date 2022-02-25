import { createAction, props } from '@ngrx/store';
import { IUser } from '../../models/user.model';

export enum USER_ACTION {
  login = '[USER] login',
  loginSuccess = '[USER] Login success',
  loginError = '[USER] Login error',
}

export const login = createAction(
  USER_ACTION.login,
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  USER_ACTION.loginSuccess,
  props<{ user: IUser | null }>()
);
export const loginError = createAction(
  USER_ACTION.loginError,
  props<{ error: Error }>()
);
