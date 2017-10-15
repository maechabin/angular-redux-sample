export interface Todo {
  value: string;
}

export interface TodoState {
  title: string;
  todo: Todo[];
}

export interface AppState {
  todoState: TodoState;
}

export const appState: AppState = {
  todoState: {
    title: 'todo',
    todo: [],
  },
};
