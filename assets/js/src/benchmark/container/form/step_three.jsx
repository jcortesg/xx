import React from "react";
import { Field, reduxForm } from 'redux-form'
import renderField from '../../../components/renderField.jsx';

class StepThree extends React.Component {
  render(){
    const { handleSubmit, pristine, previousPage, submitting } = this.props

    return(
      <form onSubmit={handleSubmit.bind(this)} className="form-horizontal">
        <p>
          Complete la información de los espacios, información soportada en los estados financieros de la empresa.
          Los valores en los otros espacios en blanco serán calculados automáticamente.
        </p>
        <legend>Balance General</legend>
          <div className="row">
            <div className="col-md-6">
              <Field
                name="cash_n_investments"
                type="number"
                component={renderField}
                label="Efectivo e Inversiones"
              />
              <Field
                name="current_assets"
                type="number"
                component={renderField}
                label="Activos Corrientes"
              />
              <Field
                name="total_assets"
                type="number"
                component={renderField}
                label="Activos Totales"
              />
            </div>
            <div className="col-md-6">
              <Field
                name="current_liabilities"
                type="number"
                component={renderField}
                label="Pasivo Corriente"
              />
              <Field
                name="nonCurrent_liabilities"
                type="number"
                component={renderField}
                label="Pasivo no Corriente"
              />
              <Field
                name="acumulated utilities"
                type="number"
                component={renderField}
                label="Utilidades Acumuladas"
              />
              <Field
                name="employeers"
                type="number"
                component={renderField}
                label="Empleados de la compañia"
              />
            </div>
          </div>
          <div className="actions">
            <button type="button" className="btn btn-default" onClick={previousPage}>
              Atrás
            </button>

            <button type="submit" className="btn btn-success pull-right" disabled={submitting}>
              Guardar
            </button>
          </div>
      </form>
    )
  }
}
export default reduxForm({
  form: 'new_data', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(StepThree)
