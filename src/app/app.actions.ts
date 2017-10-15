import { Action } from '@ngrx/store';
import { AppState, Todo } from './app.state';

export const ADD_VALUE = '[APP] addValue';
export class AddValue implements Action {
  readonly type = ADD_VALUE;
  constructor(public payload: string) { }
}

export type All = AddValue;
