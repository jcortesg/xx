import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import { loadPost, updatePost, loadCategories } from '../actions.js';
import FormCMS from '../components/form.jsx';
import { Field, reduxForm, Fields } from 'redux-form';
import {
  Link
}from 'react-router-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(loadCategories());
    this.props.dispatch(loadPost(id));
  }

  _onSubmit(values){
    delete values["file"]

    console.log(values)
    const id = this.props.match.params.id;
    this.props.dispatch(updatePost(id, values))
  }

  render(){
    const { post, loading } = this.props

    if(loading){
      return(
        "Cargando..."
      )
    }

    return(
      <div>
        <ul>
          <li>{post.title}</li>
          <li>{post.description}</li>
          <li>{post.file}</li>
          <li>{post.image}</li>
        </ul>

        <hr/>
        <h2>Editar</h2>
        <FormCMS submitAction={this._onSubmit.bind(this)} categories={this.props.categories} post={post}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.cms.post,
    categories: state.cms.categories,
    loading: state.cms.loading
  }
}

export default connect(mapStateToProps)(Index);
