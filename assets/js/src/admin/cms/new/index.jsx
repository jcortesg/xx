import React from "react";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import FormCMS from '../components/form.jsx';
import { Field, reduxForm, Fields } from 'redux-form';
import {savePost, loadCategories, resetPost} from '../actions.js';
import {
  Link
}from 'react-router-dom';

class New extends React.Component {
  componentWillMount() {
    this.props.dispatch(resetPost())
    this.props.dispatch(loadCategories());
  }

  _onSub(values){
    this.props.dispatch(savePost(values))
  }

  render(){
    return(
      <div>
        <FormCMS submitAction={this._onSub.bind(this)} categories={this.props.categories}/>
      </div>
    )
  }
}

function mapToStateProps(state){
  return{
    categories: state.cms.categories
  }
}

export default connect(mapToStateProps)(New)
