import {memo} from 'react';
import ThemeSwitcher from '../theme-switcher';
import styles from './style.module.css';

const Head: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Менеджер заметок</div>
      <ThemeSwitcher/>
    </header>
  )
} 

export default memo(Head);
