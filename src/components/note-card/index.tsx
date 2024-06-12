import {memo} from "react";
import {INote} from "../../types/i-note";
import styles from "./style.module.css";
import CheckboxIcon from "../svg/checkbox";
import BoxIcon from "../svg/box";
import TrashIcon from "../svg/trash";

interface IProps {
  item: INote;
  onRemove: (param: INote) => void;
  onToggle: (param: INote) => void;
}

const NoteCard: React.FC<IProps> = ({item, onRemove, onToggle}) => {

  const callbacks = {
    handleRemove: () => onRemove(item),
    handleToggle: () => onToggle(item),
  }

  return (
    <div className={styles.wrapper}>
      <div className={item.completed ? styles.completed_text : styles.text}>
        {item.text}
      </div>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={callbacks.handleToggle}>
          {item.completed ? <CheckboxIcon/> : <BoxIcon/>}
        </button>
        <button className={styles.btn} onClick={callbacks.handleRemove}>
          <TrashIcon/>
        </button>
      </div>
    </div>
  )
}

export default memo(NoteCard);