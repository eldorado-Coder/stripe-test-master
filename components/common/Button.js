import React from 'react';

const Button = ({type='primary', size='md', text='submit', handleClick}) => {
    return(
<button 
    onClick={handleClick}
    className={`btn btn-${type} btn-${size}`}>
    {text}
    </button>
  )
}

export default Button;
