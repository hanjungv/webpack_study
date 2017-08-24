import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import TodoLists from './components/TodoLists';
import { Provider } from 'react-redux';
import { store } from './store';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <TodoLists />
  </Provider>
, rootElement);