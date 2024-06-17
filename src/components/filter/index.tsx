import {memo} from "react";
import {plural} from "../../utils/utils";
import useStore from "../../hooks/use-store";
import styles from './style.module.css';

const Filter: React.FC = () => {
  const {state, dispatch} = useStore();
  const variants = {one: 'заметка', few: 'заметки', many: 'заметок'};
  const filteredNotes = state.filter === 'all' ? state.notes : state.notes.filter(item => item.completed === (state.filter === 'completed'));

  return (
    <div className={styles.controls}>
      <div className={styles.counter}>{plural(filteredNotes.length, variants)}</div>

      <div className={styles.options}>
        <button type='button' 
          className={state.filter === 'all' ? styles.button_active : styles.button} 
          onClick={() => dispatch({type: 'change-filter', filter: 'all'})}
        >
          Все
        </button>
        <button type='button' 
          className={state.filter === 'active' ? styles.button_active : styles.button}
          onClick={() => dispatch({type: 'change-filter', filter: 'active'})}
        >
          Активные
        </button>
        <button type='button' 
          className={state.filter === 'completed' ? styles.button_active : styles.button}
          onClick={() => dispatch({type: 'change-filter', filter: 'completed'})}
        >
          Выполненные
        </button>
      </div>
    </div>
  )
}

export default memo(Filter);