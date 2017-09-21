import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group row">
    <label className="col-sm-4 col-form-label">{label}</label>
    <div className="col-sm-8">
      <input {...input} placeholder={label} type={type} className="form-control" />
    </div>
  </div>
);

export default renderField;
