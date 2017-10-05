import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import {loadBatteries} from '../actions.js'
import renderField from '../../../components/renderField.jsx';
import {
  Link
}from 'react-router-dom';

class Index extends React.Component {
  componentWillMount() {
    // despachamos la acción al store
    this.props.dispatch(loadBatteries());
  }

  render() {
    let {batteries, loading} = this.props
    let items = "loading..."

    if(!loading){
      items = batteries.map((item, index)=>(
        <tr key={index}>
          <td>
            <Link to={"/admin/batteries/"+item.id}>
              {item.title}
            </Link>
          </td>
          <td>
            {item.description}
          </td>
          <td></td>
        </tr>
      ))
    }

    return(
      <div className="indicators">
        <div className="controls">
          <Link to="/admin/batteries/new" className="btn btn-success pull-right">
            Nuevo Set de Datos
          </Link>
          <h1>INDICADORES</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Publicado</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
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
