import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import TodoListsContainer from './containers/TodoListsContainer';
import { Provider } from 'react-redux';
import { store } from './store';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <TodoListsContainer />
  </Provider>
, rootElement);