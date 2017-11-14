import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

export default class Table extends React.Component {
  render(){
		let series = this.props.data.series
		let header = []
		let body = []
		let key = 0
		if(series !== undefined){
			series.map((serie, index) =>{
				if(serie.data !== undefined){
					try {
						body =
							serie.data.map((obj, index) => {
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
    return(
    <div>
      <h4 className="text-center">{this.props.data.title}</h4>
      <table key="x" className="table table-striped">
        <thead>
          <tr>
            {header}
          </tr>
        </thead>
        <tbody>
          {body}
        </tbody>
      </table>
    </div>)
  }
}
