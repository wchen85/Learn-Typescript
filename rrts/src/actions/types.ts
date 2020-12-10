import { FetchTodosAction, DeleteTodoAction } from './index';

export enum ActionTypes {
  fetchTodo,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
