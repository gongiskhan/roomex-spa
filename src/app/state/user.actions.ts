import { createAction } from '@ngrx/store';
import {User} from '../models/user';

export const getUser = createAction('[User] Get User', (user: User) => user);

export const saveUser = createAction('[User] Save User', (user: User) => user);
