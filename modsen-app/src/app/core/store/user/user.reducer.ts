import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '../../models/user.model';

import * as USER_ACTIONS from './user.actions';

export interface IUserState {
  user: IUser | null;
}

export const initialUserState: IUserState = {
  user: null,
};

export const userState = createReducer(
  initialUserState,
  on(
    USER_ACTIONS.loginSuccess,
    (state: IUserState, { user }: any): IUserState => ({
      ...state,
      user,
    })
  )
);

export const userReducer = (state: IUserState, action: Action): IUserState =>
  userState(state, action);
