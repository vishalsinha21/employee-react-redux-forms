import React from 'react'

export const renderField = ({input, label, type, className, meta: {touched, error, warning}}) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className={className}/>
        {touched && (error && <p className="text-danger">{error}</p>)}
      </div>
    </div>
)
