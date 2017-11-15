import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import {loadBatteries, loadCategories} from './actions.js'
import Show from './show.jsx';
import Sidebar from './sidebar.jsx'
import List from './list.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom'

class Index extends React.Component {

	componentWillMount() {
    // despachamos la acción al store
    this.props.dispatch(loadBatteries(
			{ category_id: 16 }
		));
    this.props.dispatch(loadCategories());
  }

  render() {
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
		
    return(
      <div className="row">
        <Sidebar categories={categories.filter((val) => val.type == 1)}/>
        <div className="col-md-9">
          <Switch>
            <Route exact path="/batteries/:id" component={Show}/>
            <Route exact path="/batteries/" component={List}/>
          </Switch>
        </div>
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

export default connect(mapStateToProps)(Index);
