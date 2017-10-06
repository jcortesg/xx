import React from "react";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {saveBattery, loadCategories} from '../actions.js';
import renderField from './../../../components/renderField.jsx';
import SelectField from '../../components/selectField.jsx';
import {required} from './../../../utils/validation_field.js';
import {
  Link
}from 'react-router-dom';

class New extends React.Component {
  constructor(){
    super();
    this.saveBattery = this.saveBattery.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(loadCategories());
  }

  saveBattery(values){
    this.props.dispatch(saveBattery(values))
  }

  render() {
    const { handleSubmit } = this.props

    return(
      <div className="indicators">
        <div className="controls">
          <Link to="/admin/batteries/">
            Volver
          </Link>
        </div>
        <div>
          <h1 className="text-center">CREAR INDICADOR</h1>
          <p>la creación de Indicadores se divide en los siguientes pasos:</p>
          <ul>
            <li>Ingresa los datos basicos de tu conjunto de datos</li>
            <li>Agrega el tipo visualizacion (Grafica, tabla, etc) que contine tu conjuto de datos</li>
            <li>Agrega una o mas series a cada una de tus visualizaciones</li>
          </ul>
          <form onSubmit={handleSubmit(this.saveBattery)}>
           <legend>Datos Básicos</legend>
           <div className="row">
             <div className="col-md-12">
               <Field
                 name="title"
                 type="text"
                 component={renderField}
                 label="Indicador:"
                 validate={required}
               />
             </div>
             <div className="col-md-12">
               <Field
                 name={`category_id`}
                 component={SelectField}
                 label="Categotia:"
                 validate={required}>
                 <option />
                 {
                   this.props.categories.map((item,index)=>{
                     return(<option key={index} value={item.id}>{item.name}</option>)
                  })
                 }
               </Field>
             </div>
             <div className="col-md-12">
               <Field
                 name="sources"
                 type="text"
                 component={renderField}
                 label="Fuente:"
                 validate={required}
               />
             </div>
             <div className="col-md-12">
               <div className="form-group row">
                 <label className="col-sm-4 col-form-label">Descripción:</label>
                 <div className="col-sm-8">
                   <Field
                     name="description"
                     type="text"
                     component="textarea"
                     label="Descripción:"
                     className="form-control"
                   />
                 </div>
               </div>
               <button type="submit" className="btn btn-success pull-right">
                 Guardar Indicador
               </button>
             </div>
           </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    state,
    categories: state.indicators.categories
  }
}
New = reduxForm({
  form: 'battery' // a unique identifier for this form
})(New)

export default connect(mapStateToProps)(New);
