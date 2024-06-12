import {memo, useState, useEffect} from "react";
import styles from "./style.module.css";

interface IProps {
  value: string;
  setValue: (param: string) => void;
  onSubmit: () => void;
}

const Form: React.FC<IProps> = ({value, setValue, onSubmit}) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    value.trim() ? setActive(true) : setActive(false);
  }, [value])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value.trim()) {
      onSubmit();
      setValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.input_wrapper}>
        <input
          type="text"
          className={styles.input}
          placeholder="Введите текст ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className={active ? styles.btn_active : styles.btn}>
          Создать
        </button>
      </div>
    </form>
  )
}

export default memo(Form);