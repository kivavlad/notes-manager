import {memo} from "react";
import {motion, AnimatePresence} from "framer-motion";
import useStore from "../../hooks/use-store";
import NoteCard from "../note-card";
import styles from "./style.module.css";

const List: React.FC = () => {
  const {state} = useStore();
  const initial = {opacity: 0, height: 0};
  const animate = {opacity: 1, height: 'auto'};
  const filteredNotes = state.filter === 'all' ? state.notes : state.notes.filter(item => item.completed === (state.filter === 'completed'));
  
  return (
    <motion.div className={styles.wrapper} initial={initial} animate={animate}>
      <div className={styles.list}>
        {filteredNotes.map(item =>
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