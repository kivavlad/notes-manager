import {useState} from "react";
import useStore from "../hooks/use-store";
import Container from "../components/container";
import Head from "../components/head";
import Form from "../components/form";
import Filter from "../components/filter";
import List from "../components/list";

const App: React.FC = () => {
  const {state} = useStore();
  const [filter, setFilter] = useState<string>('all');
  const filteredNotes = filter === 'all' ? state.notes : state.notes.filter(item => item.completed === (filter === 'completed'));
  const total = filteredNotes.length;

  return (
    <Container>
      <Head/>
      <Form/>
      <Filter total={total} filter={filter} setFilter={setFilter}/>
      <List list={filteredNotes}/>
    </Container>
  )
}

export default App;