import {memo} from "react";
import {motion, AnimatePresence} from "framer-motion";
import NoteCard from "../note-card";
import {INote} from "../../types/i-note";
import styles from "./style.module.css";

interface IProps {
  list: INote[];
}

const List: React.FC<IProps> = ({list}) => {
  const initial = {opacity: 0, height: 0};
  const animate = {opacity: 1, height: 'auto'};
  
  return (
    <motion.div className={styles.wrapper} initial={initial} animate={animate}>
      <div className={styles.list}>
        {list.map(item =>
          <AnimatePresence key={item.id}>
            <motion.div initial={initial} animate={animate}>
              <NoteCard item={item}/>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  )
}

export default memo(List);