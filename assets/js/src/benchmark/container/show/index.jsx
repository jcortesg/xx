import { connect } from 'react-redux';
import React from "react";
import {calculeBenchmark} from "../action.js";

class Show extends React.Component {
  toDollar(value){
    let dollar = 3000
    let div = 1000
    return value/dollar/div
  }

  render() {
    const { values } = this.props
    let capital = values.total_assets - (values.current_liabilities + values.nonCurrent_liabilities) -  values.acumulated_utilities
    return(
      <div className="container-form">
        <h3 className="text-center">
          Benckmark financiero para la Industria de Software
          <br/>
          Fedesoft
        </h3>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th colSpan="2">{values.company}</th>
                  <th colSpan="2">Benchmark Rankings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2">
                    <strong>Comparación con la Industria </strong>
                  </td>
                  <td>
                    <strong>Comparación con la Industria </strong>
                  </td>
                </tr>

                <tr>
                  <td>
                    Ingresos
                  </td>
                  <td>
                    {this.toDollar(values.total_revenue)}
                  </td>
                  <td>Ingresos (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Ingresos Netos</td>
                  <td>{this.toDollar(values.net_income)}</td>
                  <td>Ingresos Netos (Percentil)</td>
                  <td>0,000</td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <strong>Crecimiento</strong>
                  </td>
                  <td>
                    <strong>Crecimiento</strong>
                  </td>
                </tr>
                <tr>
                  <td>Crecimiento en Ingresos</td>
                  <td>{((this.toDollar(values.total_revenue))/(this.toDollar(values.previous_income))-1)}</td>
                  <td>Crecimiento en Ingresos (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Crecimiento en Ingresos Netos</td>
                  <td>{this.toDollar(((values.net_income)-(values.previous_net_income))/(values.previous_net_income))}</td>
                  <td>Crecimiento en Ingresos Netos (Percentil)</td>
                  <td>0,000</td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <strong>Rentabilidad</strong>
                  </td>
                  <td>
                    <strong>Rentabilidad</strong>
                  </td>
                </tr>
                <tr>
                  <td>Ingresos netos como porcentaje de los Ingresos </td>
                  <td>{values.net_income/values.total_revenue}</td>
                  <td>Ingresos netos como porcentaje de los Ingresos (Percentil)</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td> Ingreso Operacional como % de los Ingresos</td>
                  <td>{(values.total_revenue - values.cost_revenue - values.operating_expenses - values.administrative_expenses - values.research_market)/ values.total_revenue }</td>
                  <td> Ingreso Operacional como % de los Ingresos (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Retorno al Patrimonio y Utilidades Acumuladas</td>
                  <td>{values.net_income/( capital + values.acumulated_utilities)}</td>
                  <td>Retorno al Patrimonio y Utilidades Acumuladas (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Retorno en los Activos (ROA)</td>
                  <td>{values.net_income/values.total_assets}</td>
                  <td> Retorno en los Activos (ROA - Percentil)</td>
                  <td>0,000</td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <strong>Uso de los Activos </strong>
                  </td>
                  <td>
                    <strong>Uso de los Activos </strong>
                  </td>
                </tr>
                <tr>
                  <td>Activos como porcentaje de los Ingresos</td>
                  <td>0,000</td>
                  <td>Activos como porcentaje de los Ingresos (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Activos no efectivos como porcentaje de los ingresos</td>
                  <td>0,000</td>
                  <td>Activos no efectivos como porcentaje de los ingresos (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Capital patrimonial como porcentaje de los activos</td>
                  <td>0,000</td>
                  <td>Capital patrimonial como porcentaje de los activos (Percentil)</td>
                  <td>0,000</td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <strong>Indicadores Operativos</strong>
                  </td>
                  <td>
                    <strong>Indicadores Operativos</strong>
                  </td>
                </tr>
                <tr>
                  <td>Revenue por empleados (en miles)</td>
                  <td>0,000</td>
                  <td>Revenue por empleados (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Margen Bruto (en miles)</td>
                  <td>0,000</td>
                  <td>Margen Bruto (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Generales y Administrativos (en miles)</td>
                  <td>0,000</td>
                  <td>Generales y Administrativos (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Investigación y Desarrollo (en miles)</td>
                  <td>0,000</td>
                  <td>Investigación y Desarrollo (Percentil)</td>
                  <td>0,000</td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <strong>Asignación de Gastos </strong>
                  </td>
                  <td>
                    <strong>Asignación de Gastos </strong>
                  </td>
                </tr>
                <tr>
                  <td>G&A como porcentaje de I+D (en miles)</td>
                  <td>0,000</td>
                  <td>G&A como porcentaje de I+D (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>G&A y OtrG_Ope como porcentaje de I+D (en miles)</td>
                  <td>0,000</td>
                  <td>G&A y OtrG_Ope como porcentaje de I+D (Percentil)</td>
                  <td>0,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    values: state.benchmark.values
  }
}
export default connect(mapStateToProps)(Show);
