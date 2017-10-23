import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import store from './state.js';
import {loadPosts, loadCategories } from './actions.js';

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {categories: props.categories}
    this.change_category = this.change_category.bind(this)
  }

  change_category(value){
    console.log(value)
    this.props.dispatch(loadPosts({category_id: value}));
  }

  render() {
    var items = this.props.categories.map((item, index) =>
      <li className="nav-item" key={"menu" + index}>
        <Link to="#" className="nav-link" onClick={() => this.change_category(item.id)}>
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

function mapStateToProps(state) {
  return {
    loading: state.posts.loading,
  }
}

export default connect(mapStateToProps)(Navbar);
