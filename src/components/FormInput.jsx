import React from 'react'
import "./formInput.css";
import { useState } from 'react';
const FormInput = (props) => {
    const[focused, setFocused]=useState(false);
    const {onChange, errorMessage,label,id,...inputProps}=props;
    const handleFocus=(e)=>{
        setFocused(true)

    }
    return (
    <div className='formInput'>
        <lable>{label}</lable>
        <input 
        {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)} focused={focused.toString()}
        />
        <span>{errorMessage}</span>
    
    </div>
  )
}

export default FormInput