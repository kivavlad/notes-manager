import {memo, useState, useEffect} from "react";
import {genUUID} from "../../utils/utils";
import useStore from "../../hooks/use-store";
import styles from "./style.module.css";

const Form: React.FC = () => {
  const {dispatch} = useStore();
  const [value, setValue] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value.trim()) {
      dispatch({type: 'add-note', payload: {id: genUUID(), text: value, completed: false}});
      setValue('');
    }
  }

  useEffect(() => {
    value.trim() ? setActive(true) : setActive(false);
  }, [value])

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