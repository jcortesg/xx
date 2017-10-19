import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import {loadPost} from './actions.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}from 'react-router-dom';

class Show extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(loadPost(id));
  }

  render() {
    const { post, loading } = this.props
    let files = ""

    if (loading) {
      return("cargando...")
    }else if(post !== false && post.file ){
      files = <a href={"/uploads/files/" + post.file} target="_blank"> Descargar </a>
    }


    return(
      <div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          {files}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post,
    loading: state.posts.loading
  }
}

export default connect(mapStateToProps)(Show);
