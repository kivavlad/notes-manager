import {memo, useEffect, useState} from "react";
import MoonIcon from "../svg/moon";
import SunIcon from "../svg/sun";
import styles from "./style.module.css";

const ThemeSwitcher: React.FC = () => {
  const [isDark, setDark] = useState<boolean>(false);
  const themeText = isDark ? 'Light' : 'Dark';

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      {isDark
        ? <SunIcon className={styles.icon}/> 
        : <MoonIcon className={styles.icon}/>
      }
    </div>
  )
}

export default memo(ThemeSwitcher);