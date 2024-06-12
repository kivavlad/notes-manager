import {memo} from "react";
import styles from "./style.module.css";

interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default memo(Container);