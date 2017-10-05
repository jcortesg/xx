import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import NewBattery from './new/index.jsx';
import ShowBattery from './show/index.jsx';
import List from './index/index.jsx';
import {loadBatteries} from './actions.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}from 'react-router-dom';

class Index extends React.Component {
  render() {
    return(
      <div className="indicators">
        <Switch>
          <Route exact path="/admin/" component={ List } />
          <Route exact path="/admin/batteries/new" component={ NewBattery } />
          <Route path="/admin/batteries/:id" component={ ShowBattery } />
          <Route path="/admin/batteries/" component={ List } />
        </Switch>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    batteries: state.indicators.batteries,
    loading: state.indicators.loading
  }
}

export default connect(mapStateToProps)(Index);
