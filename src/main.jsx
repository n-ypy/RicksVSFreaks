import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './Game'
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Game />
  </Provider>,
)
