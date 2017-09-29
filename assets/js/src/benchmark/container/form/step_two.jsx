import React from "react";
import { Field, reduxForm } from 'redux-form';
import renderField from '../../../components/renderField.jsx';

class StepTwo extends React.Component {
  render(){
    const { handleSubmit } = this.props
    return(
      <div>
        <p>
          Complete la información de los espacios, información soportada en los estados financieros de la empresa.
          Los valores en los otros espacios en blanco serán calculados automáticamente.
        </p>
        <form onSubmit={handleSubmit} className="form-horizontal">
          <legend>Datos Basicos</legend>
          <div className="row">
            <div className="col-md-8">
              <Field
                name="Company"
                type="text"
                component={renderField}
                label="Nombre de la compañia"
              />
            </div>
            <div className="col-md-4">
              <Field
                name="Nit"
                type="text"
                component={renderField}
                label="NIT"
              />
            </div>
          </div>
          <br/>
          <legend>Estado de Resultado</legend>
          <div className="row">
            <div className="col-md-6">
              <Field
                name="revenue"
                type="text"
                component={renderField}
                label="Ingresos"
              />
              <Field
                name="cost"
                type="text"
                component={renderField}
                label="Costo de los bienes vendidos "
              />
              <Field
                name="expenses"
                type="text"
                component={renderField}
                label="Otros Gastos Operativos"
              />
              <Field
                name="last1"
                type="text"
                component={renderField}
                label="Gastos Generales y Administrativos"
              />
              <Field
                name="last11"
                type="text"
                component={renderField}
                label="Investigación y Mercadeo"
              />
              <Field
                name="last2"
                type="text"
                component={renderField}
                label="Ingresos Netos"
              />
            </div>
            <div className="col-md-6">
              <Field
                name="last3"
                type="text"
                component={renderField}
                label="Ingresos del Año Anterior"
              />

              <Field
                name="last4"
                type="text"
                component={renderField}
                label="Ingresos Netos del Año Anterior"
              />

            </div>
          </div>
          <div className="actions">
            <button type="button" className="btn btn-default" onClick={this.props.previousPage}>
              Atrás
            </button>

            <button type="submit" className="btn btn-success pull-right">
              Continuar
            </button>
          </div>
        </form>
        <br/>
        <br/>
      </div>
    )
  }
}

export default reduxForm({
  form: 'new_data', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(StepTwo)
