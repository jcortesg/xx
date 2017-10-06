import React from "react";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Field, reduxForm, formValueSelector, FieldArray } from 'redux-form';
import renderField from '../../../../components/renderField.jsx';
import {required} from '../../../../utils/validation_field.js';
import {renderDatasetFields} from './seriesField.jsx';
import {renderSerie} from './series.jsx';
import SelectField from '../../../components/selectField.jsx';
import {
  Link
}from 'react-router-dom';

import {
  RadialChart,
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  AreaSeries,
  VerticalBarSeries
} from 'react-vis';

class Form extends React.Component {
  Submit(values){
    console.log(values)
  }

  render() {
    const { handleSubmit,
      type,
      title,
      source,
      series,
      x_type,
      onSubmit
    } = this.props

    let s = ""
    let chart = ""
    let serie_field = ""
    let additional_field = ""

    if(type == "Radial"){
      let data = [{angle: 1}]
      if(series !== undefined){
        series.map((serie, index) =>{
          if(serie.data !== undefined){
            data = []
            serie.data.map((a, index) =>{
              data.push(a)
            })
          }
        })
      }

      chart = (<RadialChart
      colorType={'literal'}
      colorDomain={[0, 100]}
      colorRange={[0, 10]}
      margin={{top: 100}}
      data={data}
      showLabels
      width={400}
      height={200} />)

      serie_field = (
        <FieldArray name="series" dataType="Radial" component={renderDatasetFields} />
      )
    }else if(type == "Lineal"){
      if(series !== undefined){
        s = series.map((serie, index) =>{
          if(serie.data !== undefined){
            return(renderSerie(index , serie.data, serie.type, serie.color))
          }
        })
      }
      chart =(
        <XYPlot
        xType={x_type}
        width={400}
        height={300}
        xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {s}
        </XYPlot>
      )
      serie_field = (
        <FieldArray name="series" x_type={x_type} dataType="Lineal" component={renderDatasetFields} />
      )
      additional_field = (
        <div className="row">
        <div className="col-md-4">
          <Field name="x_type"
            component={SelectField}
            label="Eje X"
            >
            <option />
            <option value="linear">linear</option>
              <option value="ordinal">ordinal</option>
              <option value="category">category</option>
            </Field>
          </div>
        </div>
      )
    }else{
      let header = []
      let body = []
      if(series !== undefined){
        s = series.map((serie, index) =>{
          if(serie.data !== undefined){
            try {
              body =
                (JSON.parse(serie.data)).map((obj, index) => {
                if(index == 0){
                  header =
                    (Object.keys(obj)).map((hd, index) =>{
                      return(<th>{hd}</th>)
                    })
                }
                let keys = Object.keys(obj)
                  return(
                    <tr>
                      {(Object.keys(obj)).map((hd, index) =>{
                         return(<td>{obj[hd]}</td>)
                       })}
                    </tr>
                  )
              })
            }catch(err){
              console.log(err)
            }
          }
        })
      }

      chart =(
        <table className="table">
          <thead>
            <tr>
              {header}
            </tr>
          </thead>
          <tbody>
            {body}
          </tbody>
        </table>
      )
      serie_field = (
        <FieldArray name="series" x_type={x_type} dataType="Table" component={renderDatasetFields} />
      )
    }

    return(
      <div className="indicators">
        <div>
          <form onSubmit={handleSubmit(this.props.sendInfo)}>
            <div className="row">
              <div className="col-md-4">
                <Field
                  name="title"
                  type="text"
                  component={renderField}
                  label="Titulo:"
                  validate={required}
                />
              </div>
              <div className="col-md-4">
                <Field name="type"
                  component={SelectField}
                  label="Tipo:"
                  validate={required}>
                  <option />
                  <option value="Lineal">Lineal</option>
                  <option value="Radial">Radial</option>
                  <option value="Table">Table</option>
                </Field>
              </div>
              <div className="col-md-4">
                <Field
                  name="source"
                  type="text"
                  component={renderField}
                  label="Fuente:"
                  validate={required}
                />
              </div>
            </div>
            {additional_field}
            <div className="row">
              <div className="col-md-6">
                <div className="indicators__partial text-center">
                  {title}
                  {chart}
                  <small>fuente: {source}</small>
                </div>
              </div>
              <div className="col-md-6">
                {serie_field}
              </div>
            </div>
            <div className="col-md-12">
              <button action="submit" className="btn btn-success pull-right">
                Guardar Indicador
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

Form = reduxForm({
  form: 'dataset' // a unique identifier for this form
})(Form)

const selector = formValueSelector('dataset')

function mapStateToProps(state) {
  const {
    type,
    title,
    source,
    series,
    x_type
  } = selector(state, 'type', 'title', 'source', 'series', 'x_type')
  return{
    type,
    title,
    source,
    series,
    x_type
  }
}
export default connect(mapStateToProps)(Form);
