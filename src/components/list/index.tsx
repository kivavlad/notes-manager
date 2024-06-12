import {memo} from "react";
import {motion, AnimatePresence} from "framer-motion";
import styles from "./style.module.css";
import {INote} from "../../types/i-note";

interface IProps {
  list: INote[];
  renderItem: (param: INote) => React.ReactNode;
}

const List: React.FC<IProps> = ({list, renderItem}) => {
  return (
    <motion.div className={styles.wrapper}
      initial={{opacity: 0, height: 0}}
      animate={{opacity: 1, height: 'auto'}}
    >
      <div className={styles.list}>
        {list.map(item =>
          <AnimatePresence key={item.id}>
            <motion.div 
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: 'auto'}}
            >
              {renderItem(item)}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  )
}

export default memo(List);