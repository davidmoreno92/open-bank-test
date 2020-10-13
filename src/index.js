import './index.css'

import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from "history";
import configureStore from './store/configureStore'

import App from './App'
import FormPage from './pages/FormPage'
import './i18n';

const store = configureStore()

const routes = (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route exact path="/" component={App} />
      <Route exact component={FormPage} />
      <Route path="form" component={FormPage} />
    </Router>
  </Provider >
)

ReactDOM.render(routes, document.getElementById('root'))
