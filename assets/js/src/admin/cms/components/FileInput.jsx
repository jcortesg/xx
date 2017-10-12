import React from "react";

export class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(e){
    const { input: { onChange } } = this.props
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      onChange({type: file.type.split('/')[1], binary: reader.result.split(',')[1]})
    }
    reader.readAsDataURL(file)
  }

  render() {
    const { input: { value } } = this.props
    return (<input
              type="file"
              value={null}
              onChange={this.onChange}
            />)
  }
}
