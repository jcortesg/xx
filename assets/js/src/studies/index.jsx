import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import store from './state.js';
import Navbar from './navbar.jsx';
import {loadPosts, loadCategories } from './actions.js';

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

class Index extends React.Component {
  componentWillMount() {
    let type = this.props.match.path.replace(/[/]/g, '')
    this.props.dispatch(loadPosts({type: type }));
    this.props.dispatch(loadCategories());
  }

  isStudy(valor) {
    return valor.type == 2
  }

  isBulletin(valor){
    return valor.type == 3
  }

  render() {
    let mainContent = null;
    let { posts, loading } = this.props;
    let type = this.props.match.path.replace(/[/]/g, '')
    let categories = []

    if (loading) {
      mainContent = ("Loading");

      // Show an error if there is one
    } else if (this.props.error !== false) {
      mainContent = ('Error');

      // If we're not loading, don't have an error and there are repos, show the repos
    } else if (this.props.posts !== false) {

      if(type == "study"){
        categories = this.props.categories.filter(this.isStudy)
      }else if(type == "bulletin"){
        categories = this.props.categories.filter(this.isBulletin)
      }

      mainContent = posts.map((item, index) => (
        <div className="media" key={index}>
          <img className="mr-3" src={"/uploads/posts/"+ item.id +"/original.png"} />
          <div className="media-body">
            <h5 className="mt-0">
              <Link to={"/"+type + "/" + item.id }>
                {item.title}
              </Link>
            </h5>
            {item.description}
            <br/>
            <small>Categoría: {item.category.name}</small>
          </div>
          <hr/>
        </div>
      ))
    }
    return(
      <div className="row">
        <Navbar type={type} categories={categories}/>
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
    categories: state.posts.categories,
    loading: state.posts.loading,
    error: false
  }
}

export default connect(mapStateToProps)(Index);
