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

  percentRank(vec, x) {
    console.log(x)
    console.log(vec)
    console.log("······")
    var s = 0;
    var b = 0;
    for (var k = 0; k < vec.length; k++) {
      if (vec[k] < x) {
        s += 1;
      }else{
        b += 1;
      }
    }
    return s/(s+b-1);
  }

  render() {
    const { values, loading,  ratios } = this.props
    let capital = values.total_assets - (values.current_liabilities + values.nonCurrent_liabilities) -  values.acumulated_utilities
    let total_revenue = Math.round(this.toDollar(values.total_revenue))
    let net_income = Math.round(this.toDollar(values.net_income))
    let revenue_growth = ((values.total_revenue/(values.previous_income))-1) *100
    let net_income_percent= Math.round((net_income/total_revenue) * 100)
    let net_income_growth = Math.round(((values.net_income - values.previous_net_income)/values.previous_net_income)*100)
    let operating_income = Math.round(((values.total_revenue - values.cost_revenue - values.operating_expenses - values.administrative_expenses - values.research_market)/ values.total_revenue)*100)
    let return_on_equety = Math.round((values.net_income/( capital + values.acumulated_utilities))* 100)
    let return_on_assent = Math.round(values.net_income/values.total_assets * 100)
    let non_cash_assent = Math.round(values.total_assets /values.total_revenue *100)
    let equity_to_assent = Math.round((capital + values.acumulated_utilities ) /values.total_assets *100)
    let rev_per_employee = (values.total_revenue/ values.employeers)/1000
    let gross_margin = Math.round(((values.total_revenue - values.cost_revenue)/values.total_revenue) *100)
    let general_admin = Math.round(values.administrative_expenses/ values.total_revenue *100)
    let r_y_d = Math.round(values.research_market/values.total_revenue *100)
    let gya_ryd_ratio =  Math.round( values.operating_expenses/values.research_market *100)
    let gya_op_ryd = Math.round((values.operating_expenses + values.administrative_expenses)/values.research_market *100)

    if(loading){
      return("...cargando...")
    }

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
                    Ingresos USD
                  </td>
                  <td>
                    {total_revenue}
                  </td>
                  <td>{this.percentRank(ratios.total_revenue, total_revenue)*100}%</td>
                  <td>0,000</td>
                  <td>0,00</td>
                  <td>0,000</td>
                  <td>0,00</td>
                </tr>
                <tr>
                  <td>Ingresos Netos USD</td>
                  <td>{net_income}</td>
                  <td>{this.percentRank(ratios.net_income, net_income) * 100}%</td>
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
                  <td>{ revenue_growth }%</td>
                  <td>{this.percentRank(ratios.revenue_growth, revenue_growth)*100}%</td>
                  <td>0,000</td>
                  <td>0,00</td>
                  <td>0,000</td>
                  <td>0,00</td>
                </tr>

                <tr>
                  <td>Crecimiento en Ingresos Netos</td>
                  <td>{net_income_growth}%</td>
                  <td>{this.percentRank(ratios.net_income_growth, net_income_growth) *100}%</td>
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
                  <td>{net_income_percent}%</td>
                  <td>{this.percentRank(ratios.net_income_percent, net_income_percent)*100}%</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td> Ingreso Operacional como % de los Ingresos</td>
                  <td>{operating_income}%</td>
                  <td>{this.percentRank(ratios.operating_income, operating_income)*100}%</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Retorno al Patrimonio y Utilidades Acumuladas</td>
                  <td>{return_on_equety}%</td>
                  <td>{this.percentRank(ratios.return_on_equety, return_on_equety)*100}%</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Retorno en los Activos (ROA)</td>
                  <td>{ return_on_assent }%</td>
                  <td>{this.percentRank(ratios.return_on_assent, return_on_assent)*100}%</td>
                  <td>0,000</td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <strong>Uso de los Activos </strong>
                  </td>
                </tr>
                <tr>
                  <td>Activos como porcentaje de los Ingresos</td>
                  <td>{ }</td>
                  <td>00</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Activos no efectivos como porcentaje de los ingresos</td>
                  <td>{ non_cash_assent }%</td>
                  <td>{this.percentRank(ratios.non_cash_assent, non_cash_assent)*100}%</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Capital patrimonial como porcentaje de los activos</td>
                  <td>{ equity_to_assent }%</td>
                  <td>{this.percentRank(ratios.equity_to_assent, equity_to_assent)*100}%</td>
                  <td>0,000</td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <strong>Indicadores Operativos</strong>
                  </td>
                </tr>
                <tr>
                  <td>Revenue por empleados (en miles)</td>
                  <td>{rev_per_employee}</td>
                  <td>{this.percentRank(ratios.rev_per_employee, rev_per_employee)}</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Margen Bruto (en miles)</td>
                  <td>{gross_margin}%</td>
                  <td>{this.percentRank(ratios.gross_margin, gross_margin)*100}%</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Generales y Administrativos (en miles)</td>
                  <td>{ general_admin}%</td>
                  <td>{this.percentRank(ratios.general_admin, general_admin)*100}%</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>Investigación y Desarrollo (en miles)</td>
                  <td>{ r_y_d }</td>
                  <td>{this.percentRank(ratios.r_y_d, r_y_d)*100}%</td>
                  <td>0,000</td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <strong>Asignación de Gastos </strong>
                  </td>
                </tr>
                <tr>
                  <td>G&A como porcentaje de I+D (en miles)</td>
                  <td>{gya_ryd_ratio}%</td>
                  <td>{this.percentRank(ratios.gya_ryd_ratio, gya_ryd_ratio)*100}%</td>
                  <td>0,000</td>
                </tr>
                <tr>
                  <td>G&A y OtrG_Ope como porcentaje de I+D (en miles)</td>
                  <td>{gya_op_ryd}%</td>
                  <td>{this.percentRank(ratios.gya_op_ryd, gya_op_ryd)*100}%</td>
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
    ratios: state.benchmark.ratios,
    loading: state.benchmark.loading
  }
}
export default connect(mapStateToProps)(Show);
