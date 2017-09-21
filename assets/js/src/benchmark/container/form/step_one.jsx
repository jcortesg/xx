import React from "react";

export default class StepOne extends React.Component {
  render(){
    return(
      <div>
        <h4>Sectores</h4>
        <p>
          Esta herramienta de competitividad ha sido creada para ayudar a
          las empresas de Software en Colombia, a comparar sus resutados
          financieros con otras empresas dentros de la industria tanto
          internacional (principalmente el mercado de Estados unidos) como
          local. Esta herramienta le permite ingresar su información
          financiera y obtener comparaciones instantáneas con una muestra
          de diferentes grupos de empresas de software.
        </p>

          <ul>
            <li>
              <strong>Industria:</strong>
              Esta información dentro de la herramienta contiene los resultados
              de 328 empresas públicas, la mayoría de eslla situadas en
              Estados Unidos, con ingresos en ventas desde 21.000 hast 100 billones de dólares.
            </li>
            <li>
              <strong>Hasta 100 Millones de USD:</strong>
              Este subsector de la herramienta contiene los resultados de
              72 compañías con ingresos en ventas por debajo de los 100 millones de USD
            </li>
            <li>
              <strong>Servicios:</strong>
              Este sector contiene 126 empresa en TI, servicios de Telecomunicaciones
              y Servicios de Transmisión de Informacióm. Dentro de estas empresas se encuentras IBM, Level 3 y Accenture.
            </li>
            <li>
              <strong>Internet:</strong>
              Las 28 empresas de Internet que se encuentran en esta base son proveedores
              de información a través de Internet, como Google y Facebook
            </li>
            <li>
              <strong>Software:</strong>
              El sector de Software incluye software de aplicaciones, multimedia,
              técnico, sistemas y de seguridad. Incluye 134 compañías como Oracle,
              Adobe, Symantec y SAP.
            </li>
          </ul>
          <button onClick={() => this.props.onSubmit()} className="btn btn-primary">Iniciar Evaluación</button>
      </div>
    )
  }
}
