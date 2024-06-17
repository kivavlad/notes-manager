import {INote} from "./i-note";

export interface IState {
  notes: INote[];
  filter: 'all' | 'active' | 'completed';
}