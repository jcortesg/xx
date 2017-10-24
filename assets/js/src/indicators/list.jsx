import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import {loadBatteries, loadCategories} from './actions.js'

import {
  Link
}from 'react-router-dom'

class List extends React.Component {
  render(){
    let {batteries, loading, categories} = this.props
    let items = "loading..."

    if(!loading){
      items = batteries.map((item, index)=>(
        <li key={index} className="indicators__list__item">
          <Link to={"/batteries/"+item.id}>
            <h4>{item.title}</h4>
          </Link>
          <p>{item.description}</p>
        </li>
      ))
    }

    return (
      <div className="indicators">
      <ul className="indicators__list">
      {items}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    batteries: state.indicators.batteries,
    loading: state.indicators.loading,
    categories: state.indicators.categories
  }
}

export default connect(mapStateToProps)(List);

