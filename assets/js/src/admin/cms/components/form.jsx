import React from "react";
import { connect } from 'react-redux';
import { Field, reduxForm, Fields } from 'redux-form';
import renderField from './../../../components/renderField.jsx';
import SelectField from '../../components/selectField.jsx';
import {required} from './../../../utils/validation_field.js';
import {FileInput} from './FileInput.jsx'

const renderNormalField = ({ input, label, type, meta: { touched, error } }) => {
  return(
    <div>
      <input {...input}  type={type} className="form-control" placeholder={label} />
    </div>
  )
}



let Form = (props) => {
  const { handleSubmit, load, pristine, submitting, submitAction, categories } = props
  return(
    <form onSubmit={handleSubmit(submitAction)} encType="multipart/form-data">
      <legend>Datos Básicos</legend>
      <div className="row form-group">
        <div className="col-md-12">
          <label>Título</label>
          <Field
            name="title"
            type="text"
            label="Título"
            component={renderNormalField}
            validate={required}
          />
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-6">
          <Field
            name="category_id"
            type="text"
            label= "Categoria:"
            component={SelectField}>
            <option />
            {
              categories.map((item,index)=>{
                return(<option key={index} value={item.id}>{item.name}</option>)
              })
            }
          </Field>
        </div>
        <div className="col-md-6">
          <Field
            name="type"
            label= "Tipo:"
            component={SelectField}>
            <option></option>
            <option value="study">Estudio</option>
            <option value="bulletin">Boletines</option>
          </Field>
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-12">
          <label>Contenido</label>
            <Field
              name="description"
              component="textarea"
              className="form-control"
              validate={required}/>
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-6">
          <label>Imagen:</label>
            <Field
              name="image"
              label= "Imagen:"
              component={FileInput}
              type="file"
              className="form-control-file"/>
        </div>
        <div className="col-md-6">
          <label>Archivo</label>
            <Field
              name="file"
              label= "Tipo:"
              type="file"
              component={FileInput}
              className="form-control-file"/>
        </div>
      </div>
      <button action="submit" className="pull-right btn btn-primary">
        Guardar
      </button>
    </form>
  )
}

Form = reduxForm({
  form: "newPost",
  fields: ['title', 'category_id', 'content', 'image']
})(Form)


export default Form