import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState } from './user.reducer';

export const selectUserFeature = createFeatureSelector<IUserState>('user');
export const selectUser = createSelector(
  selectUserFeature,
  (state: IUserState) => state.user
);
