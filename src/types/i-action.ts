import {INote} from "./i-note";

export interface IAction {
  type: 'add-note' | 'remove-note' | 'toggle-completed';
  payload: INote;
}