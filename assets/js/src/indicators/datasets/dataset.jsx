import React from "react";
import { Provider } from 'react-redux';
import Radial from "./charts/Radial.jsx";
import Lineal from "./charts/Lineal.jsx";

export default class Dataset extends React.Component {
  render() {
    const {data} = this.props
    let dataset = "loading"

    switch(data.type){
      case "Table":
        dataset= "xxx"
      case "Radial":
        return(<Radial data={data}/>)
      case "Lineal":
        return(<Lineal  data={data}/>)
    }
  }
}
