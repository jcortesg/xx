import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import store from './state.js';
import Navbar from './navbar.jsx';
import {loadPosts } from './actions.js';

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

class Index extends React.Component {
  componentWillMount() {
    let type = this.props.match.path.replace(/[/]/g, '')
    this.props.dispatch(loadPosts({type: type}));
  }

  render() {
    let mainContent = null;
    let { posts, loading } = this.props;
    let type = "bulletins"

    if (loading) {
      mainContent = ("Loading");

      // Show an error if there is one
    } else if (this.props.error !== false) {
      mainContent = ('Error');

      // If we're not loading, don't have an error and there are repos, show the repos
    } else if (this.props.repos !== false) {
      mainContent = posts.map((item, index) => (
          <li className="indicators__list__item" key={index}>
            <Link to={"/"+type + "/" + item.id }>
              <h4>{item.title}</h4>
            </Link>
            <p>
              {item.description}
            </p>
            <p className="text-right">
              <em>Categoría: {item.category.name}</em>
            </p>
          </li>
      ))
    }

    return(
      <div className="row">
        <Navbar/>
        <div className="col-md-9">
          <div className="indicators">
            <ul className="indicators__list">
              { mainContent }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: false
  }
}

export default connect(mapStateToProps)(Index);
