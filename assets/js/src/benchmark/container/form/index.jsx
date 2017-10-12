import React from "react";
import { connect } from 'react-redux';
import {calculeBenchmark} from "../action.js";
import StepOne from './step_one.jsx';
import StepTwo from './step_two.jsx';
import StepThree from './step_three.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
}from 'react-router-dom'

class Form extends React.Component {
  constructor(){
    super();
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)

    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  handleSubmit(values){
    this.props.dispatch(calculeBenchmark(values))
  }

  render(){
    const { page } = this.state
    if (this.props.complete){
      return (
        <Redirect to={"/benchmark/calcule"}/>
      )
    }
    return(
      <div className="container-form">
        <h3 className="text-center">
          Benckmark financiero para la Industria de Software
          <br/>
          Modelo Internacional
        </h3>
        {page === 1 && <StepOne onSubmit={this.nextPage}/>}
        {page === 2 && <StepTwo onSubmit={this.nextPage} previousPage={this.previousPage}/>}
        {page === 3 && <StepThree onSubmit={this.handleSubmit.bind(this)} previousPage={this.previousPage}/>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    values: state.benchmark.values,
    complete: state.benchmark.complete
  }
}
export default connect(mapStateToProps)(Form);
