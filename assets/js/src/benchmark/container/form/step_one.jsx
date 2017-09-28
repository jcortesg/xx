import React from "react";

export default class StepOne extends React.Component {
  render(){
    return(
      <div>
        <h5>Sectores</h5>
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

          <h5>Tasas</h5>
          <p>
            La siguiente información es una descripción de los datos que incluye esta herramienta
            y como están siendo calculados dentros de la misma. Cada una de las tasas e
            indicadores han sido calculados para comparar los resultados de su empresa con
            los de la industria en general. Como resultado, usted encontrará un valor que le
            muestra el percentil de su posición en la industria. Este número muestra el
            porcentaje de empresas que cuentan con resultados menores al de su empresa.
          </p>
          <ul>
            <li>
              <strong>Ingresos: </strong>
              Esta estadística muestra el rango en el que su empresa se encuentra en
              tamaño de ventas comparado con las empresas en el estudio.
            </li>
            <li>
              <strong>Ingresos Netos: </strong>
              Esta estadística muestra el rango en el que su empresa se encuentra
              en ingresos netos comparado con las empresas en el estudio.
            </li>
            <li>
              <strong>Crecimiento en Ingresos: </strong>
              El crecimiento en ingresos es el cambio en ingresos del año anterior
              al año presente como un porcentaje del ingreso de este año.
            </li>
            <li>
              <strong>Crecimiento en Ingresos Netos: </strong>
              El crecimiento en ingresos netos es calculado como el cambio en los Ingresos Netos
              del año anterior al año presente como un porcentaje del Ingreso Neto de este año.
            </li>
            <li>
              <strong>Ingresos Netos como porcentaje de los ingresos : </strong>
              Ingresos netos divididos por los ingresos.
            </li>
            <li>
              <strong>Ingresos Operacionales como porcentaje de los Ingresos: </strong>
              Los Ingresos Operacionales son calculados como Ingresos Netos + Otros Gastosi
              y el resultado es el ratio expresado como porcentaje de los ingresos.
            </li>
            <li>
              <strong>Activo como porcentaje de los Ingresos: </strong>
              Se calcula como Activos Totales como porcentaje de los Ingresos.
              Esta métrica se utiliza para identificar el valor de los activos requeridos para soportar los ingresos de una empresa.
            </li>
          </ul>
          <div className="actions">
            <button onClick={() => this.props.onSubmit()} className="btn btn-primary btn-block">
              Iniciar Evaluación
            </button>
          </div>
      </div>
    )
  }
}
