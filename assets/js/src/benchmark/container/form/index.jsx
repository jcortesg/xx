import React from "react";
import StepOne from './step_one.jsx';
import StepTwo from './step_two.jsx';
import StepThree from './step_three.jsx';

export default class Form extends React.Component {
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

  render(){
    const { page } = this.state

    return(
      <div>
        <h3 className="text-center">
          Benckmark financiero para la Industria de Software - Modelo Internacional
        </h3>
        {page === 1 && <StepOne onSubmit={this.nextPage}/>}
        {page === 2 && <StepTwo onSubmit={this.nextPage}/>}
        {page === 3 && <StepThree onSubmit={this.nextPage}/>}
      </div>
    )
  }
}
