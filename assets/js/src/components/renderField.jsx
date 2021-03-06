import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group row">
    <label className="col-sm-4 col-form-label">{label}</label>
    <div className="col-sm-8">
      <input {...input} type={type} className="form-control" />
      {
        touched &&
        ((error && <span>{error}</span>))
      }
    </div>
  </div>
);

export default renderField;
