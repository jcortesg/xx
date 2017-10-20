import React from "react";
import { Provider } from 'react-redux';
import store from './state.js';

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {categories: props.categories}
  }

  render() {
    var items = this.props.categories.map((item, index) =>
      <li className="nav-item" key={"menu" + index}>
        <Link to="#" className="nav-link">
          {item.name}
        </Link>
      </li>
    )

    return(
      <div className="col-md-3">
        <h4>Categorías</h4>
        <ul className="nav nav-pills flex-column">
          { items }
        </ul>
      </div>
    )
  }
}
