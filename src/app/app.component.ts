import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as AppActions from './app.actions';
import * as AppReducer from './app.reducer';
import { AppState, TodoState, appState, Todo } from './app.state';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoState$: Observable<TodoState>;
  value: string;

  constructor(
    private store: Store<AppState>,
  ) {
    this.todoState$ = store.select(AppReducer.getState);
  }

  handleClick(event: any) {
    if (this.value !== undefined && this.value !== '') {
      this.store.dispatch(new AppActions.AddValue(this.value));
      this.value = '';
    }
  }
}
