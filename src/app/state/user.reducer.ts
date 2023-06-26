import {createReducer, createSelector, on} from '@ngrx/store';
import {User} from '../models/user';
import {getUser, saveUser} from './user.actions';

export interface UserState {
  user: User
}

export const initialState: User = {} as User;

export const userReducer = createReducer(
  initialState,
  on(getUser, (state, user) => user),
  on(saveUser, (state, user) => user),
);

export const userSelector = createSelector(
  (state: UserState) => state.user,
  (user: User) => user
)
