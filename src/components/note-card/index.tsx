import {memo} from "react";
import useStore from "../../hooks/use-store";
import {INote} from "../../types/i-note";
import styles from "./style.module.css";
import CheckboxIcon from "../svg/checkbox";
import BoxIcon from "../svg/box";
import TrashIcon from "../svg/trash";

interface IProps {
  item: INote;
}

const NoteCard: React.FC<IProps> = ({item}) => {
  const {dispatch} = useStore();

  const callbacks = {
    onRemove: () => dispatch({type: 'remove-note', payload: item}),
    onToggle: () => dispatch({type: 'toggle-completed', payload: item}),
  }

  return (
    <div className={styles.wrapper}>
      <div className={item.completed ? styles.completed_text : styles.text}>
        {item.text}
      </div>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={callbacks.onToggle}>
          {item.completed ? <CheckboxIcon/> : <BoxIcon/>}
        </button>
        <button className={styles.btn} onClick={callbacks.onRemove}>
          <TrashIcon/>
        </button>
      </div>
    </div>
  )
}

export default memo(NoteCard);