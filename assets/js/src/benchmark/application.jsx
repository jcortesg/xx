import React from "react";
import Form  from './container/form/index.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import ReactDOM from "react-dom";

export default class Application extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Form />
      </Provider>
    )
  }
}
