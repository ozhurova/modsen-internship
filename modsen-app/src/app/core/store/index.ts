import { ActionReducerMap } from '@ngrx/store';
import { IUserState, userState } from './user/user.reducer';

export interface IAppState {
  user: IUserState;
}

export const appReducers: ActionReducerMap<IAppState> = {
  user: userState,
};
