import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Loading from './components/Loading';

ReactDOM.render(
  <BrowserRouter>
    <Loading />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
