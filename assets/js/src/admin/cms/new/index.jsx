import React from "react";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import FormCMS from '../components/form.jsx';
import { Field, reduxForm } from 'redux-form';
import {savePost, loadCategories} from '../actions.js';
import {
  Link
}from 'react-router-dom';

class New extends React.Component {
  _onSubmit(values){
    this.props.dispatch(savePost(values))
  }

  render(){
    return(
      <div>
        <FormCMS submitAction={this._onSubmit.bind(this)}/>
      </div>
    )
  }
}

function mapToStateProps(state){
  return{
    state
  }
}

export default connect(mapToStateProps)(New)
