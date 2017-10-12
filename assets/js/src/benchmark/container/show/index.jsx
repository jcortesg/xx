import { connect } from 'react-redux';
import React from "react";
import {calculeBenchmark} from "../action.js";

class Show extends React.Component {
  render() {
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
                  <th colSpan="2">Titulo</th>
                  <th colSpan="2">Benchmark Rankings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
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
                    0,0000
                  </td>
                  <td>Ingresos (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Ingresos Netos</td>
                  <td>0,000</td>
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
                  <td>0,000</td>
                  <td>Crecimiento en Ingresos (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Crecimiento en Ingresos Netos</td>
                  <td>0,000</td>
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
                  <td>0,000</td>
                  <td>Ingresos netos como porcentaje de los Ingresos (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td> Ingreso Operacional como % de los Ingresos</td>
                  <td>0,000</td>
                  <td> Ingreso Operacional como % de los Ingresos (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Retorno al Patrimonio y Utilidades Acumuladas</td>
                  <td>0,000</td>
                  <td>Retorno al Patrimonio y Utilidades Acumuladas (Percentil)</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Retorno en los Activos (ROA)</td>
                  <td>0,000</td>
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
    values: state
  }
}
export default connect(mapStateToProps)(Show);
