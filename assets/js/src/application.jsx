import React from "react";
import Form  from './benchmark/container/form/index.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers.js';

export default class Application extends React.Component {
  render() {
    let store = createStore(rootReducer);

    return(
      <Provider store={store}>
        <Form />
      </Provider>
    )
  }
}
