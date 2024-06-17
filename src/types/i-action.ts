import {INote} from "./i-note";

export type IAction =
  | {type: 'add-note', payload: INote}
  | {type: 'remove-note', payload: INote}
  | {type: 'toggle-completed', payload: INote}
  | {type: 'change-filter', payload:  'all' | 'active' | 'completed'}