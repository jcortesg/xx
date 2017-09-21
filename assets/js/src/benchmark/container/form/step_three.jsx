import React from "react";
import { Field, reduxForm } from 'redux-form'
import renderField from '../../../components/renderField.jsx';

class StepThree extends React.Component {
  render(){
    console.log(this.props)
    const { handleSubmit, pristine, previousPage, submitting } = this.props

    return(
      <form onSubmit={handleSubmit} className="form-horizontal">
        <legend>Balance General</legend>
          <div className="row">
            <div className="col-md-6">
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Efectivo e Inversiones"
              />
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Activos Corrientes"
              />
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Activos Totales"
              />
            </div>
            <div className="col-md-6">
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Pasivo Corriente"
              />
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Pasivo no Corriente"
              />
              <Field
                name="last"
                type="text"
                component={renderField}
                label="Utilidades Acumuladas"
              />
            </div>
          </div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    )
  }
}
export default reduxForm({
  form: 'new_data', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(StepThree)
