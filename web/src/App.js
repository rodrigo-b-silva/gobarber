import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import Routes from './routes';
import history from './services/history';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
