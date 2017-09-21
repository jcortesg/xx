import React from "react";
import { Field, reduxForm } from 'redux-form';
import renderField from '../../../components/renderField.jsx';

class StepTwo extends React.Component {
  render(){
    const { handleSubmit } = this.props
    return(
      <div>
        <p>
          Complete la información de los espacioes en amarillo, información soportada en los estados financieros de la empresa.
          Los valores en los otros espacios en blanco serán calculados automáticamente.
          <br/>
          Cuando termine de ingresar la información puede ingresar a la hoja "Todos los Benchamarks" para observar la comparación.
        </p>
        <form onSubmit={handleSubmit} className="form-horizontal">
          <legend>Datos Basicos</legend>
          <div className="row">
            <div className="col-md-8">
              <Field
                name="Name"
                type="text"
                component={renderField}
                label="Nombre de la compañia"
              />
            </div>
            <div className="col-md-4">
              <Field
                name="lastName"
                type="text"
                component={renderField}
                label="NIT"
              />
            </div>
          </div>
          <legend>Estado de Resultado</legend>
          <div className="row">
            <div className="col-md-6">
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Ingresos"
              />
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Costo de los bienes vendidos "
              />
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Otros Gastos Operativos"
              />
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Otros Gastos Operativos"
              />
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Investigación y Mercadeo"
              />
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Ingresos Netos"
              />
            </div>
            <div className="col-md-6">
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Ingresos del Año Anterior"
              />

              <Field
                name="last"
                type="text"
                component={renderField}
                label="Ingresos Netos del Año Anterior"
              />

            </div>
          </div>
          <button type="button" className="previous" onClick={this.props.previousPage}>
            Previous
          </button>

          <button type="submit" className="next">
            Next
          </button>
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
