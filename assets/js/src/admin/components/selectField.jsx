import React from 'react';

export default class SelectField extends React.Component {
  render() {
    const {
      input,
      label,
      touched,
      error,
      warning,
      children
    } = this.props;

    return (
      <div className={touched && (error && 'form-group has-error') || ' row form-group'}>
        <label className="col-sm-4 col-form-label">{label}</label>
        <div className="col-sm-8">
          <select {...input} className="form-control">
            {children}
          </select>
        </div>
      </div>
    );
  }
}
