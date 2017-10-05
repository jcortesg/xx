import React from "react";
import { Provider } from 'react-redux';
import {
  CircularGridLines,
  RadialChart
} from 'react-vis';

export default class Radial extends React.Component {
  render() {
    const {data}= this.props;
    return(
      <div>
        Radio
        <RadialChart
          colorType={'literal'}
          width={600}
          height={300}
          colorDomain={[0, 100]}
          colorRange={[0, 10]}
          showLabels
          data={[
            {angle: 1,  label: 'green', opacity: 0.2},
            {angle: 2,  label: 'yellow'},
            {angle: 5,  label: 'cyan'},
            {angle: 3,  label: 'magenta'},
            {angle: 5,  label: 'yellow again'}
          ]}
        />
      </div>
    )
  }
}
