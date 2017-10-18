import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import { loadPost } from '../actions.js';
import {
  Link
}from 'react-router-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(loadPost(id));
  }

  render(){
    const { post } = this.props
    return(
      <div>
        <ul>
          <li>{post.title}</li>
          <li>{post.description}</li>
          <li>{post.file}</li>
          <li>{post.image}</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.cms.post,
    loading: state.indicators.loading
  }
}

export default connect(mapStateToProps)(Index);
