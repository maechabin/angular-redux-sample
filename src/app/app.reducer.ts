import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as AppActions from './app.actions';
import { AppState, TodoState, appState } from './app.state';

export type Action = AppActions.All;

export function reducer(state: TodoState = appState.todoState, action: Action ): TodoState {
  switch (action.type) {
    case AppActions.ADD_VALUE:
      return Object.assign({}, state, {
        todo: [...state.todo, {value: action.payload}],
      });
    default:
      return state;
  }
}

export const getState = (state: AppState) => state.todoState;
export const selectTitle = createSelector(getState, (state: TodoState) => state.title);
