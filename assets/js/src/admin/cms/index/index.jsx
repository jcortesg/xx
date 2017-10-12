import { connect } from 'react-redux';
import React from "react";
import { loadPosts } from '../actions.js'
import {
  Link
}from 'react-router-dom';

class Index extends React.Component {
  componentWillMount() {
    // despachamos la acción al store
    this.props.dispatch(loadPosts());
  }

  render(){
    let mainContent = null;
    let { posts, loading } = this.props;
    // Show a loading indicator when we're loading
    if (loading) {
      mainContent = ("Loading");

      // Show an error if there is one
    } else if (this.props.error !== false) {
      mainContent = ('Error');

      // If we're not loading, don't have an error and there are repos, show the repos
    } else if (this.props.repos !== false) {
      mainContent = posts.map((item, index) => (
        <tr key={index}>
          <td>
            <Link to={"/admin/cms/"+item.id}>
              {item.title}
            </Link>
          </td>
          <td>{item.description}</td>
          <td>{item.category.name}</td>
          <td>{item.type}</td>
        </tr>
      ))
    }

    return(
      <div className={"xx"}>
      <div className="controls">
      <Link to="/admin/cms/new" className="btn btn-success pull-right">
      Nuevo Post
      </Link>
      <h1>POSTS</h1>
      </div>
      <table className="table">
      <thead>
      <tr>
      <th>Título</th>
      <th>Descripción</th>
      <th>Categoría</th>
      <th>Type</th>
      </tr>
      </thead>
      <tbody>
      {mainContent}
        </tbody>
      </table>
    </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    posts: state.cms.posts,
    loading: state.cms.loading,
    error: false
  }
}

export default connect(mapStateToProps)(Index);
