import { connect } from 'react-redux';
import React from "react";
import {calculeBenchmark, loadRatios} from "../action.js";

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    tab: ''
    }
    this.selectTab = this.selectTab.bind(this)
  }

  selectTab(value){
    this.setState({tab: value})
  }

  componentWillMount() {
    this.props.dispatch(loadRatios());
  }
  
  toDollar(value){
    let dollar = 3000
    let div = 1000
    return (value/dollar/div).toFixed(2)
  }

  percentRank(vec, x) {
    console.log(vec)
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
    const { values, loading,  ratios, ratios_less, ratios_services, ratios_internet, ratios_software } = this.props
    
    if(loading){
     return("Calculando..")
    }
    
    let capital = values.total_assets - (values.current_liabilities + values.nonCurrent_liabilities) -  values.acumulated_utilities
    let total_revenue = Math.round(this.toDollar(values.total_revenue))
    let net_income = Math.round(this.toDollar(values.net_income))
    let revenue_growth = Math.round(((values.total_revenue/(values.previous_income))-1) *100)
    let net_income_percent= Math.round((net_income/total_revenue) * 100)
    let net_income_growth = Math.round(((values.net_income - values.previous_net_income)/values.previous_net_income)*100)
    let operating_income = Math.round(((values.total_revenue - values.cost_revenue - values.operating_expenses - values.administrative_expenses - values.research_market)/ values.total_revenue)*100)
    let return_on_equety = Math.round((values.net_income/( capital + values.acumulated_utilities))* 100)
    let return_on_assent = Math.round(values.net_income/values.total_assets * 100)
    let non_cash_assent = Math.round(values.total_assets /values.total_revenue *100)
    let equity_to_assent = Math.round((capital + values.acumulated_utilities ) /values.total_assets *100)
    let rev_per_employee = Math.round((values.total_revenue/ values.employeers)/1000)
    let gross_margin = Math.round(((values.total_revenue - values.cost_revenue)/values.total_revenue) *100)
    let general_admin = Math.round(values.administrative_expenses/ values.total_revenue *100)
    let r_y_d = Math.round(values.research_market/values.total_revenue *100)
    let gya_ryd_ratio =  Math.round( values.operating_expenses/values.research_market *100)
    let gya_op_ryd = Math.round((values.operating_expenses + values.administrative_expenses)/values.research_market *100)
    let assent_revenue = Math.round((values.total_assets/ values.total_revenue)*100)
    

    let table = (
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
                  <td>{this.percentRank(ratios_less.total_revenue, total_revenue)*100}%</td>
                  <td>{this.percentRank(ratios_services.total_revenue, total_revenue)*100}%</td>
                  <td>{this.percentRank(ratios_internet.total_revenue, total_revenue)*100}%</td>
                  <td>{this.percentRank(ratios_software.total_revenue, total_revenue)*100}%</td>
                </tr>
                <tr>
                  <td>Ingresos Netos USD</td>
                  <td>{net_income}</td>
                  <td>{this.percentRank(ratios.net_income, net_income) * 100}%</td>
                  <td>{this.percentRank(ratios_less.net_income, net_income) * 100}%</td>
                  <td>{this.percentRank(ratios_services.net_income, net_income) * 100}%</td>
                  <td>{this.percentRank(ratios_internet.net_income, net_income) * 100}%</td>
                  <td>{this.percentRank(ratios_software.net_income, net_income) * 100}%</td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <strong>Crecimiento</strong>
                  </td>
                </tr>
                <tr>
                  <td>Crecimiento en Ingresos</td>
                  <td>{ revenue_growth }%</td>
                  <td>{(this.percentRank(ratios.revenue_growth, revenue_growth)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.revenue_growth, revenue_growth)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.revenue_growth, revenue_growth)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.revenue_growth, revenue_growth)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.revenue_growth, revenue_growth)*100).toFixed(0)}%</td>
                </tr>

                <tr>
                  <td>Crecimiento en Ingresos Netos</td>
                  <td>{net_income_growth}%</td>
                  <td>{(this.percentRank(ratios.net_income_growth, net_income_growth) *100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.net_income_growth, net_income_growth) *100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.net_income_growth, net_income_growth) *100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.net_income_growth, net_income_growth) *100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.net_income_growth, net_income_growth) *100).toFixed(0)}%</td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <strong>Rentabilidad</strong>
                  </td>
                </tr>
                <tr>
                  <td>Ingresos netos como porcentaje de los Ingresos </td>
                  <td>{net_income_percent}%</td>
                  <td>{(this.percentRank(ratios.net_income_percent, net_income_percent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.net_income_percent, net_income_percent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.net_income_percent, net_income_percent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.net_income_percent, net_income_percent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.net_income_percent, net_income_percent)*100).toFixed(0)}%</td>
                </tr>
                <tr>
                  <td> Ingreso Operacional como % de los Ingresos</td>
                  <td>{operating_income}%</td>
                  <td>{(this.percentRank(ratios.operating_income, operating_income)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.operating_income, operating_income)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.operating_income, operating_income)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.operating_income, operating_income)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.operating_income, operating_income)*100).toFixed(0)}%</td>
                </tr>
                <tr>
                  <td>Retorno al Patrimonio y Utilidades Acumuladas</td>
                  <td>{return_on_equety}%</td>
                  <td>{(this.percentRank(ratios.return_on_equety, return_on_equety)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.return_on_equety, return_on_equety)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.return_on_equety, return_on_equety)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.return_on_equety, return_on_equety)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.return_on_equety, return_on_equety)*100).toFixed(0)}%</td>
                </tr>
                <tr>
                  <td>Retorno en los Activos (ROA)</td>
                  <td>{ return_on_assent }%</td>
                  <td>{(this.percentRank(ratios.return_on_assent, return_on_assent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.return_on_assent, return_on_assent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.return_on_assent, return_on_assent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.return_on_assent, return_on_assent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.return_on_assent, return_on_assent)*100).toFixed(0)}%</td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <strong>Uso de los Activos </strong>
                  </td>
                </tr>
                <tr>
                  <td>Activos como porcentaje de los Ingresos</td>
                  <td>{ assent_revenue}%</td>
                  <td>{(this.percentRank(ratios.assent_revenue, assent_revenue)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.assent_revenue, assent_revenue)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.assent_revenue, assent_revenue)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.assent_revenue, assent_revenue)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.assent_revenue, assent_revenue)*100).toFixed(0)}%</td>
                </tr>
                <tr>
                  <td>Activos no efectivos como porcentaje de los ingresos</td>
                  <td>{ non_cash_assent }%</td>
                  <td>{(this.percentRank(ratios.non_cash_assent, non_cash_assent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.non_cash_assent, non_cash_assent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.non_cash_assent, non_cash_assent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.non_cash_assent, non_cash_assent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.non_cash_assent, non_cash_assent)*100).toFixed(0)}%</td>
                </tr>
                <tr>
                  <td>Capital patrimonial como porcentaje de los activos</td>
                  <td>{ equity_to_assent }%</td>
                  <td>{(this.percentRank(ratios.equity_to_assent, equity_to_assent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.equity_to_assent, equity_to_assent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.equity_to_assent, equity_to_assent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.equity_to_assent, equity_to_assent)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.equity_to_assent, equity_to_assent)*100).toFixed(0)}%</td>
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
                  <td>{this.percentRank(ratios_less.rev_per_employee, rev_per_employee)}</td>
                  <td>{this.percentRank(ratios_services.rev_per_employee, rev_per_employee)}</td>
                  <td>{this.percentRank(ratios_internet.rev_per_employee, rev_per_employee)}</td>
                  <td>{this.percentRank(ratios_software.rev_per_employee, rev_per_employee)}</td>
                </tr>
                <tr>
                  <td>Margen Bruto (en miles)</td>
                  <td>{gross_margin}%</td>
                  <td>{(this.percentRank(ratios.gross_margin, gross_margin)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.gross_margin, gross_margin)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.gross_margin, gross_margin)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.gross_margin, gross_margin)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.gross_margin, gross_margin)*100).toFixed(0)}%</td>
                </tr>
                <tr>
                  <td>Generales y Administrativos (en miles)</td>
                  <td>{ general_admin}%</td>
                  <td>{(this.percentRank(ratios.general_admin, general_admin)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.general_admin, general_admin)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.general_admin, general_admin)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.general_admin, general_admin)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.general_admin, general_admin)*100).toFixed(0)}%</td>
                </tr>
                <tr>
                  <td>Investigación y Desarrollo (en miles)</td>
                  <td>{ r_y_d }</td>
                  <td>{(this.percentRank(ratios.r_y_d, r_y_d)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.r_y_d, r_y_d)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.r_y_d, r_y_d)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.r_y_d, r_y_d)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.r_y_d, r_y_d)*100).toFixed(0)}%</td>
                </tr>

                <tr>
                  <td colSpan="7">
                    <strong>Asignación de Gastos </strong>
                  </td>
                </tr>
                <tr>
                  <td>G&A como porcentaje de I+D (en miles)</td>
                  <td>{gya_ryd_ratio}%</td>
                  <td>{(this.percentRank(ratios.gya_ryd_ratio, gya_ryd_ratio)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.gya_ryd_ratio, gya_ryd_ratio)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.gya_ryd_ratio, gya_ryd_ratio)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.gya_ryd_ratio, gya_ryd_ratio)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.gya_ryd_ratio, gya_ryd_ratio)*100).toFixed(0)}%</td>
                </tr>
                <tr>
                  <td>G&A y OtrG_Ope como porcentaje de I+D (en miles)</td>
                  <td>{gya_op_ryd}%</td>
                  <td>{(this.percentRank(ratios.gya_op_ryd, gya_op_ryd)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_less.gya_op_ryd, gya_op_ryd)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_services.gya_op_ryd, gya_op_ryd)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_internet.gya_op_ryd, gya_op_ryd)*100).toFixed(0)}%</td>
                  <td>{(this.percentRank(ratios_software.gya_op_ryd, gya_op_ryd)*100).toFixed(0)}%</td>
                </tr>
              </tbody>
            </table>
            )

  let nav = (
      <div className="benchmark__tabs">
        <ul>
          <li>
            <a href="#" onClick={(value) => {this.selectTab("table")}}>
							<i class="fa fa-industry" aria-hidden="true"></i>            
							Comparación de la industria
						</a>
          </li>
          <li>
						<a href="#" onClick={(value) =>{this.selectTab("quality")}}>
              <i class="fa fa-check-circle" aria-hidden="true"></i>
							Calificación de la Empresa
						</a>
          </li>
        </ul>
      </div>
    )
  let comments = (
  <div>
    <h5>Comentarios adicionales:</h5>
    <ul>
      <li>
      Existen tasas óptimas de crecimiento a nivel internacional para asegurar el crecimiento sin
      afectar las utilidades de la compañía. Esta tasa fue definida como un rango entre el 8 y 12%
      anual, con utilidades del 10% anual. El crecimiento en ingresos netos de la media internacional
      fue del 52%. La empresa ha tenido un crecimiento por por debajo de la media
      internacional de los ingresos (tasa de crecimiento de los ingresos) y la empresa ha tenido un
      crecimiento por debajo de la media internacional de los ingresos netos (tasa de
      crecimiento de los ingresos netos).
    </li>
    </ul>
  </div>

  )
  let content_tab = table
  let score_type ="Emergente"
  var position = { top: '220px', left: '20%'}
  
  let type = (
    <p><strong>Emergentes:</strong></p>
  )
    switch(true){
      case total_revenue * 3000 > 18000000000:
        score_type = "Tractora"
        position = { top: '80px', left: '80%'}
        type = (
          <p> 
            <strong>Tractora:</strong> Las empresas de software tractoras se caracterizan por contar un nivel de ventas
            anual mayor a los 18.000 millones de pesos, un Revenue por empleado mayor a los 89 millones
            de pesos. Estas cuentan con productos, servicios y procesos maduros. Las empresas bajo esta
            categoría son los modelos a seguir de la industria a nivel nacional
          </p>
        )
        break;
      case (18000000000 < total_revenue * 3000 > 3000000000) && revenue_growth >= 15:
        score_type = "Gacela"
        position = { top: '220px', left: '80%'}
        type = (
          <p>
            <strong>Gacelas:</strong> Las Gacelas de nuestra industria son empresas que han contado con crecimientos
            extraordinarios (por encima del 15% anual). Son por lo general empresas jóvenes (menos de 12
            años en la industria). Por su nivel de ventas, todavía no se consideran empresas tractoras, pero
            su dinámica empresarial hace que se asemejen mucho a estas
          </p>
        )
        break;
      case rev_per_employee * 3000 > 50000000:
        score_type = "Escalable"
        position = { top: '80px', left: '20%'}
        type = (
          <p>
            <strong>Escalables: </strong>Las empresas Escalables se caracterizan por contar con niveles de ventas
            importantes, y con crecimiento constantes y bajos. Estas son empresas que tienen un potencial
            alto de crecimiento pero no lo hacen por la aversión al riesgo que tienen
          </p>
        )
        break;
    }

  let txt_comments = []
 if(revenue_growth >= 52){
    txt_comments.push("Existen tasas óptimas de crecimiento a nivel internacional para asegurar el crecimiento sin afectar las utilidades de la compañía. Esta tasa fue definida como un rango entre el 8 y 12% anual, con utilidades del 10% anual. El crecimiento en ingresos netos de la media internacional  fue de 52%. La empresa ha tenido un crecimiento por encima de la media internacional de los ingresos (" + revenue_growth + " % ).")
 }else{
    txt_comments.push("Existen tasas óptimas de crecimiento a nivel internacional para asegurar el crecimiento sin afectar las utilidades de la compañía. Esta tasa fue definida como un rango entre el 8 y 12% anual, con utilidades del 10% anual. El crecimiento en ingresos netos de la media internacional  fue de 52%. La empresa ha tenido un crecimiento por debajo de la media internacional de los ingresos (" + revenue_growth + " % ).")
 }
 txt_comments.push("El margen bruto de la muestra internacional es del 63%. El valor reportado por la empresa es del "+ gross_margin +"%.")

	if(assent_revenue >= 160){
		txt_comments.push("El valor de los activos como porcentaje de los ingresos para la muestra internacional es del 160%, valor superior al reportado por la empresa (" +assent_revenue +"% ).")
	}else{
		txt_comments.push("El valor de los activos como porcentaje de los ingresos para la muestra internacional es del 160%, valor  por debajo  al reportado por la empresa (" +assent_revenue +"% ).")
	}
  let quality = (
  <div>
    <strong>Rev x empleado: </strong>{rev_per_employee * 3000}
    <br/>
    <strong>Tasa de crecimiento: </strong>{revenue_growth}%
    <div className="score">
      <div className="score__counter">
        <div className="point" style={position}></div>
          <div className="score__session score__session--right">Escalables</div>
          <div className="score__session ">Tractoras</div>
          <div className="score__session score__session--right score__session--top">Emergentes</div>
          <div className="score__session score__session--top">Gacelas</div>
        </div>
      </div>
      {type}
      <h4>Comentarios adicionales</h4>
      {txt_comments.map((item, index) => <li key={index}> {item} </li> )}
    </div>
  )

  switch(this.state.tab){
    case "quality":
      content_tab = quality
      break;
   }
    return(
      <div className="benchmark container-form">
        <h3 className="text-center">
          Benckmark financiero para la Industria de Software
          <br/>
          Fedesoft
        </h3>
				<br/>
        {nav}
        <div className="row">
          <div className="col-md-12">
            {content_tab}
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
      loading: state.benchmark.loading_r,
      ratios_services: state.benchmark.ratios_services,
      ratios_internet: state.benchmark.ratios_internet,
      ratios_software: state.benchmark.ratios_software,
      ratios_less: state.benchmark.ratios_less
    }
}
export default connect(mapStateToProps)(Show);
