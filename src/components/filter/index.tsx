import {memo} from "react";
import {plural} from "../../utils/utils";
import styles from './style.module.css';

interface IProps {
  total: number;
  filter: string;
  setFilter: (arg: string) => void;
}

const Filter: React.FC<IProps> = ({total, filter, setFilter}) => {
  const variants = {one: 'заметка', few: 'заметки', many: 'заметок'};

  return (
    <div className={styles.controls}>
      <div className={styles.counter}>{plural(total, variants)}</div>

      <div className={styles.options}>
        <button type='button' 
          className={filter === 'all' ? styles.button_active : styles.button} 
          onClick={() => setFilter('all')}
        >
          Все
        </button>
        <button type='button' 
          className={filter === 'active' ? styles.button_active : styles.button}
          onClick={() => setFilter('active')}
        >
          Активные
        </button>
        <button type='button' 
          className={filter === 'completed' ? styles.button_active : styles.button}
          onClick={() => setFilter('completed')}
        >
          Выполненные
        </button>
      </div>
    </div>
  )
}

export default memo(Filter);