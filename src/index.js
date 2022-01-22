import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';

import './styles/tailwind.css'
import './index.css';
import App from './App';
import Loading from './components/Loading';

ReactDOM.render(
  <HashRouter>
    <Loading />
    <App />
  </HashRouter>,
  document.getElementById('root')
);
