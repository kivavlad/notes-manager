import {IState} from "../../types/i-state";
import {IAction} from "../../types/i-action";

const storageNotes = localStorage.getItem('notes');

/**
 * Начальное состояние
 */
const initialState: IState = {
  notes: storageNotes ? JSON.parse(storageNotes) : [],
}

/**
 * Изменение состояния
 */
const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    // Добавление новой задачи
    case 'add-note':
      const newNotes = [...state.notes, action.payload];
      localStorage.setItem('notes', JSON.stringify(newNotes));
      return {...state, notes: newNotes};
    
    // Удаление задачи
    case 'remove-note':
      const filteredNotes = state.notes.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('notes', JSON.stringify(filteredNotes));
      return {...state, notes: filteredNotes};
    
    // Переключатель статуса
    case 'toggle-completed':
      const newStatusNotes = state.notes.map((item) => {
        if (item.id === action.payload.id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
      localStorage.setItem('notes', JSON.stringify(newStatusNotes));
      return {...state, notes: newStatusNotes};

    default:
      return state;
  }
}

export {initialState, reducer};