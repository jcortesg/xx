import React from "react";
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm, Fields } from 'redux-form';
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

function isStudy(valor) {
  return valor.type == 2
}

function isBulletin(valor){
  return valor.type == 3
}

let Form = (props) => {
  const { handleSubmit, type,  load, pristine, submitting, submitAction, categories } = props
  let categories_list =[]

  if(type == "study"){
    categories_list = categories.filter(isStudy)
  }else if(type == "bulletin"){
    categories_list = categories.filter(isBulletin)
  }

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
            name="type"
            label= "Tipo:"
            component={SelectField}>
            <option></option>
            <option value="study">Estudio</option>
            <option value="bulletin">Boletines</option>
          </Field>
        </div>
        <div className="col-md-6">
          <Field
            name="category_id"
            type="text"
            label= "Categoria:"
            component={SelectField}>
            <option />
            {
              categories_list.map((item,index)=>{
                return(<option key={index} value={item.id}>{item.name}</option>)
              })
            }
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
        <div className="col-md-12">
          <div className="form-check form-check-inline">
            <Field
              name="is_home"
              id="is_home"
              component="input"
              type="checkbox"/>

            <label className="form-check-label" htmlFor="employed">Mostrar en la pagina de inicio</label>
          </div>
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
  form: 'newPost' // a unique identifier for this form
})(Form)

const selector = formValueSelector('newPost')

Form = connect(state => {
  const type = selector(state, 'type')
  let post = state.cms.post
  if(!state.cms.loading){
    post.category_id = post.category.id
  }

  return {
    initialValues: post,
    type
  }

})(Form)

export default Form
