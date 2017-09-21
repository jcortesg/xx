import React from "react";
import Form  from './benchmark/container/form/index.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

export default class Application extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Form />
      </Provider>
    )
  }
}
