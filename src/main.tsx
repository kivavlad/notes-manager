import ReactDOM from 'react-dom/client';
import {StoreProvider} from './store';
import App from './app';
import './styles/reset.css';
import './styles/normalize.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <App />
  </StoreProvider>,
)
