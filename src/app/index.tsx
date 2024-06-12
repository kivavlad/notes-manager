import {useState, useCallback} from "react";
import {genUUID} from "../utils/utils";
import {INote} from "../types/i-note";
import useStore from "../hooks/use-store";
import Container from "../components/container";
import Head from "../components/head";
import Form from "../components/form";
import Filter from "../components/filter";
import List from "../components/list";
import NoteCard from "../components/note-card";

const App: React.FC = () => {
  const {state, dispatch} = useStore();
  const [value, setValue] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');
  const filteredNotes = filter === 'all' ? state.notes : state.notes.filter(item => item.completed === (filter === 'completed'));
  const total = filteredNotes.length;

  const callbacks = {
    // Добавление новой заметки
    onAdd: useCallback(() => {
      dispatch({type: 'add-note', payload: {id: genUUID(), text: value, completed: false}});
    }, [value]),
    // Удаление заметки
    onRemove: useCallback((item: INote) => dispatch({type: 'remove-note', payload: item}), []),
    // Переключатель статуса
    onToggle: useCallback((item: INote) => dispatch({type: 'toggle-completed', payload: item}), []),
  }

  const renders = {
    item: useCallback((item: INote) => {
      return <NoteCard item={item} onRemove={callbacks.onRemove} onToggle={callbacks.onToggle} />
    }, [])
  }

  return (
    <Container>
      <Head/>
      <Form value={value} setValue={setValue} onSubmit={callbacks.onAdd}/>
      <Filter filter={filter} setFilter={setFilter} total={total} />
      <List list={filteredNotes} renderItem={renders.item}/>
    </Container>
  )
}

export default App;