import {memo} from "react";
import {plural} from "../../utils/utils";
import useStore from "../../hooks/use-store";
import styles from './style.module.css';

const Filter: React.FC = () => {
  const {state, dispatch} = useStore();
  const filteredNotes = state.filter === 'all' ? state.notes : state.notes.filter(item => item.completed === (state.filter === 'completed'));
  const total = filteredNotes.length;
  const variants = {one: 'заметка', few: 'заметки', many: 'заметок'};

  return (
    <div className={styles.controls}>
      <div className={styles.counter}>{plural(total, variants)}</div>

      <div className={styles.options}>
        <button type='button' 
          className={state.filter === 'all' ? styles.button_active : styles.button} 
          onClick={() => dispatch({type: 'change-filter', payload: 'all'})}
        >
          Все
        </button>
        <button type='button' 
          className={state.filter === 'active' ? styles.button_active : styles.button}
          onClick={() => dispatch({type: 'change-filter', payload: 'active'})}
        >
          Активные
        </button>
        <button type='button' 
          className={state.filter === 'completed' ? styles.button_active : styles.button}
          onClick={() => dispatch({type: 'change-filter', payload: 'completed'})}
        >
          Выполненные
        </button>
      </div>
    </div>
  )
}

export default memo(Filter);