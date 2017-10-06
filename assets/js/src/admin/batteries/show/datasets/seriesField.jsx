import React from "react";
import { Field, reduxForm, formValueSelector, FieldArray } from 'redux-form';
import renderField from '../../../../components/renderField.jsx';
import {required} from '../../../../utils/validation_field.js';
import SelectField from '../../../components/selectField.jsx'; 

const renderSerieField = ({ input, label, type, meta: { touched, error } }) => {
  return(
    <div>
      <input {...input} type={type} className="form-control" placeholder={label} />
    </div>
  )
}
export const renderDatasetFields = (props) => {
  switch(props.dataType){
    case "Table":
      return renderTable(props)
    case "Radial":
      return(renderRadial(props))
    case "Lineal":
    default:
      return(renderLineal(props))
  }
}
const renderTable = ({ fields, meta: { error, submitFailed } }) => {
  return(
    <div className="row">
      <div className="col-sm-7">
        <Field
          name={`series[0].name`}
          type="text"
          component={renderSerieField}
          label="Nombre"
          validate={required}
        />
      </div>
      <div className="col-sm-5">
        <Field
          name={`series[0].type`}
          component={SelectField}
          label="Tipo:"
          validate={required}>
          <option />
          <option value="table">Tabla</option>
        </Field>
      </div>
      <div className="col-sm-12">
        <label>Datos:</label>
        <Field
          name={`series[0].data`}
          component="textarea"
          className="form-control"
          validate={required}>
        </Field>
        <br/>
      </div>
    </div>
  )
}

const renderLineal = ({ fields, meta: { error, submitFailed } }) => {
  return(
    <ul className="list-unstyled field-list">
      <li>
        <button type="button" className="btn btn-sm btn-success" onClick={() => fields.push({})}>
          Agregar Dataset
        </button>
      </li>
      {fields.map((member, index) =>
        <li key={index}>
          <div className="row">
            <div className="col-sm-4">
              <Field
                name={`${member}.name`}
                type="text"
                component={renderSerieField}
                label="Nombre"
                validate={required}
              />
            </div>
            <div className="col-sm-3">
              <Field
                name={`${member}.type`}
                component={SelectField}
                label="Tipo:"
                validate={required}>
                <option />
                <option value="LineSeries">Lineal</option>
                <option value="BarSeries">Barras</option>
              </Field>
            </div>
            <div className="col-sm-3">
              <Field
                name={`${member}.color`}
                type="text"
                component={SelectField}
                label="Color">
                <option />
                <option value="#c9c9ff">Azul</option>
                <option value="#d6ffc6">Verde</option>
                <option value="#ffe2f1">Rosa</option>
                <option value="#feffb9">Amarillo</option>
              </Field>
            </div>
            <div className="col-sm-2">
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => fields.remove(index)}>
                X
              </button>
            </div>
          </div>
         <FieldArray name={`${member}.data`} component={renderDataField} />
        </li>
       )}
    </ul>
  )
}
const renderDataField = ({fields, meta: {error, submitFailed}}) => {
  return(
    <ul className="list-unstyled">
      <li>
        <button type="button" className="btn btn-sm btn-success" onClick={() => fields.push({})}>
          Agregar Valor
        </button>
      </li>
      {fields.map((member, index) =>
      <li key={index}>
        <div className="row">
          <div className="col-sm-3">
            <Field
              name={`${member}.x`}
              type="text"
              component={renderSerieField}
              label="Valor X"
              validate={required}
            />
          </div>
          <div className="col-sm-3">
            <Field
              name={`${member}.y`}
              type="number"
              component={renderSerieField}
              label="Valor Y "
              validate={required}
              normalize={(value) => parseInt(value)}
            />
          </div>
          <div className="col-sm-2">
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => fields.remove(index)}>
              X
            </button>
          </div>
        </div>
      </li>
      )}
    </ul>
  )
}
const renderRadial = ({ fields, meta: { error, submitFailed } }) => {
  return(
    <ul className="list-unstyled">
      <li>
        <button type="button" onClick={() => fields.push({})}>
          Agregar Nuevo Valor
        </button>
      </li>
      {fields.map((member, index) =>
        <li key={index}>
          <div className="row">
            <div className="col-sm-6">
              <Field
                name={`${member}.name`}
                type="text"
                component={renderSerieField}
                label="Nombre "
                validate={required}
              />
            </div>
            <div className="col-sm-3">
              <Field
                name={`${member}.type`}
                type="text"
                component={SelectField}
                label="Tipo"
                validate={required}>
                <option />
                <option value="Radio">Radio</option>
              </Field>
            </div>
          </div>
          <FieldArray name={`${member}.data`} component={renderRadioField} />
        </li>
       )}
    </ul>
  )
}
const renderRadioField = ({fields, meta: {error, submitFailed}}) => {
  return(
    <ul className="list-unstyled">
      <li>
        <button type="button" className="btn btn-sm btn-success" onClick={() => fields.push({})}>
          Agregar Valor
        </button>
      </li>
      {fields.map((member, index) =>
        <li key={index}>
          <div className="row">
            <div className="col-sm-6">
              <Field
                name={`${member}.label`}
                type="text"
                component={renderSerieField}
                label="Etiqueta "
                validate={required}
              />
            </div>
            <div className="col-sm-3">
              <Field
                name={`${member}.angle`}
                type="text"
                component={renderSerieField}
                label="Valor"
                validate={required}
                normalize={(value) => parseInt(value)}
              />
            </div>
            <div className="col-sm-3">
              <Field
                name={`${member}.color`}
                type="text"
                component={SelectField}
                label="Color">
                <option />
                <option value="#c9c9ff">Azul</option>
                <option value="#d6ffc6">Verde</option>
                <option value="#ffe2f1">Rosa</option>
                <option value="#feffb9">Amarillo</option>
              </Field>
            </div>
          </div>
        </li>
       )}
    </ul>
  )
}
