import { createAction, props } from '@ngrx/store';
import { IUser } from '../../models/user.model';

export enum USER_ACTION {
  login = '[USER] login',
  loginSuccess = '[USER] Login success',
  loginError = '[USER] Login error',
  getUser = '[USER] Get user',
  getUserSuccess = '[USER] Get user success',
  getUserError = '[USER] Get user error',
}

export const login = createAction(USER_ACTION.login, props<{ email: string, password: string }>());
export const loginSuccess = createAction(USER_ACTION.loginSuccess,props<{ user: IUser }>());
export const loginError = createAction(USER_ACTION.loginError,props<{ error: Error }>());

export const GetUser = createAction(USER_ACTION.getUser);
export const GetUserSuccess = createAction(USER_ACTION.getUserSuccess, props<{ user: IUser | null }>());
export const GetUserError = createAction(USER_ACTION.getUserError, props<{ error: Error }>());

