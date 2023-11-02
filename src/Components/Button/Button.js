import React from 'react';
import './Button.css'

const Button = ({title,clickHandler,active}) => {

  return (
    <button className={`button ${active?'active':''}`} onClick={()=>clickHandler()}>{title}</button>
  )
}

export default Button
