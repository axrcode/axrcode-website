import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history'
//import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/tailwind.css'
import './index.css';
import App from './App';
import Loading from './components/General/Loading';

const hist = createBrowserHistory()

ReactDOM.render(
  <BrowserRouter history={hist}>
    <Loading />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
