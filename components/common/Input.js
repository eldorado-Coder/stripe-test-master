import React from 'react';

const Input = ({value, label, type= 'text', setValue}) => {
  return (
  <div className='input-group mb-3'>
      <span className='input-group-text'>{label}</span>
      <input 
        type={type}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className='form-control'/>
  </div>
  
    )
};

export default Input;
