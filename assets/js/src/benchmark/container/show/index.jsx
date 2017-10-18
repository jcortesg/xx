import { connect } from 'react-redux';
import React from "react";
import {calculeBenchmark, loadRatios} from "../action.js";

class Show extends React.Component {

  componentWillMount() {
    this.props.dispatch(loadRatios());
  }

  toDollar(value){
    let dollar = 3000
    let div = 1000
    return (value/dollar/div).toFixed(2)
  }

  percentRank(arr, v) {
    if (typeof arr == 'undefined') return 0;
    for (var i = 0, l = arr.length; i < l; i++) {
      if (v <= arr[i]) {
        while (i < l && v === arr[i]) i++;
        if (i === 0) return 0;
        if (v !== arr[i-1]) {
          i += (v - arr[i-1]) / (arr[i] - arr[i-1]);
        }
        return i / l;
      }
    }
    return 1;
  }

  render() {
    const { values, ratios } = this.props
    let capital = values.total_assets - (values.current_liabilities + values.nonCurrent_liabilities) -  values.acumulated_utilities
    let total_revenue = this.toDollar(values.total_revenue)
    let net_income = this.toDollar(values.net_income)

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
                  <th></th>
                  <th>{values.company}</th>
                  <th> Industria </th>
                  <th> Ingresos{" < "}$100m</th>
                  <th>Servicios </th>
                  <th>Internet</th>
                  <th>Software</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    Ingresos
                  </td>
                  <td>
                    {total_revenue}
                  </td>
                  <td>{this.percentRank(ratios.total_revenue, values.total_revenue)}</td>
                  <td>0,000</td>
                  <td>0,00</td>
                  <td>0,000</td>
                  <td>0,00</td>
                </tr>
                <tr>
                  <td>Ingresos Netos</td>
                  <td>{net_income}</td>
                  <td>{this.percentRank(ratios.net_income, net_income)}</td>
                  <td>0,000</td>
                  <td>0,00</td>
                  <td>0,000</td>
                  <td>0,00</td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <strong>Crecimiento</strong>
                  </td>
                </tr>
                <tr>
                  <td>Crecimiento en Ingresos</td>
                  <td>{(values.total_revenue/(values.previous_income)-1) *100}</td>
                  <td>{this.percentRank(ratios.revenue_growth, (values.total_revenue/(values.previous_income)-1)*100)}</td>
                  <td>0,000</td>
                  <td>0,00</td>
                  <td>0,000</td>
                  <td>0,00</td>
                </tr>

                <tr>
                  <td>Crecimiento en Ingresos Netos</td>
                  <td>{((values.net_income- values.previous_net_income)/values.previous_net_income).toFixed(2)}</td>
                  <td>0,000</td>
                  <td>0,000</td>
                  <td>0,00</td>
                  <td>0,000</td>
                  <td>0,00</td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <strong>Rentabilidad</strong>
                  </td>
                </tr>
                <tr>
                  <td>Ingresos netos como porcentaje de los Ingresos </td>
                  <td>{values.net_income/values.total_revenue}</td>
                  <td>0,0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td> Ingreso Operacional como % de los Ingresos</td>
                  <td>{((values.total_revenue - values.cost_revenue - values.operating_expenses - values.administrative_expenses - values.research_market)/ values.total_revenue).toFixed(2) }</td>
                  <td>0,0</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Retorno al Patrimonio y Utilidades Acumuladas</td>
                  <td>{(values.net_income/( capital + values.acumulated_utilities)).toFixed(2)}</td>
                  <td>0,0</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Retorno en los Activos (ROA)</td>
                  <td>{values.net_income/values.total_assets}</td>
                  <td> 0,0</td>
                  <td>0,000</td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <strong>Uso de los Activos </strong>
                  </td>
                </tr>
                <tr>
                  <td>Activos como porcentaje de los Ingresos</td>
                  <td>0,000</td>
                  <td>00</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Activos no efectivos como porcentaje de los ingresos</td>
                  <td>0,000</td>
                  <td>00</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Capital patrimonial como porcentaje de los activos</td>
                  <td>0,000</td>
                  <td>00</td>
                  <td>0,000</td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <strong>Indicadores Operativos</strong>
                  </td>
                </tr>
                <tr>
                  <td>Revenue por empleados (en miles)</td>
                  <td>0,000</td>
                  <td>00</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Margen Bruto (en miles)</td>
                  <td>0,000</td>
                  <td>00</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Generales y Administrativos (en miles)</td>
                  <td>0,000</td>
                  <td>00</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Investigación y Desarrollo (en miles)</td>
                  <td>0,000</td>
                  <td>0,0</td>
                  <td>0,000</td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <strong>Asignación de Gastos </strong>
                  </td>
                </tr>
                <tr>
                  <td>G&A como porcentaje de I+D (en miles)</td>
                  <td>0,000</td>
                  <td></td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>G&A y OtrG_Ope como porcentaje de I+D (en miles)</td>
                  <td>0,000</td>
                  <td>00</td>
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
    values: state.benchmark.values,
    ratios: state.benchmark.ratios
  }
}
export default connect(mapStateToProps)(Show);
