import React, { useState } from 'react';
import './ButtonGroup.css'
import Button from '../Button/Button';

const ButtonGroup = ({getSelectedButton}) => {

    const [activeButton, setActiveButton]=useState('1day')

    const timing=[{time:'1 Hour',value:'1h'},{time:'2 Hour',value:'2h'},{time:'4 Hour',value:'4h'},{time:'1 Day',value:'1day'},{time:'1 Week',value:'1week'},{time:'1 Month',value:'1month'}]

    const handleButtonClick = (value) => {
        getSelectedButton(value);
        setActiveButton(value)
    }

  return (
    <div className='button-group'>
      {
        timing.map((timing,i)=>
            <Button key={i} title={timing.time} clickHandler={()=>handleButtonClick(timing.value)} 
            active={activeButton===timing.value}/>
        )
      }
    </div>
  )
}

export default ButtonGroup
