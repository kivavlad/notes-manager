import {INote} from "./i-note";

export interface IAction {
  type: 'add-note' | 'remove-note' | 'toggle-completed' | 'change-filter';
  payload?: INote | any;
  filter?: 'all' | 'active' | 'completed';
}