import Container from "../components/container";
import Head from "../components/head";
import Form from "../components/form";
import Filter from "../components/filter";
import List from "../components/list";

const App: React.FC = () => {
  return (
    <Container>
      <Head/>
      <Form/>
      <Filter/>
      <List/>
    </Container>
  )
}

export default App;