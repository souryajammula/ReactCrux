import React from 'react'
import AsyncSelect from 'react-select/async';
import { useState } from 'react';
export default function MultiSelectDrop() {
    const [selected,setSelected]=useState([])
    const data=[
        {value:'India',label:'India'},
        {value:'USA',label:'USA'},
        {value:'UK',label:'UK'}
    ];
    function handleOption(item){
        setSelected(item);
    }
    const loadOptions=(loadOption,callback)=>{
        
        setTimeout(()=>{
            const filterItem = data.filter((item)=>item.label.toLowerCase().includes(loadOption.toLowerCase()));
            callback(filterItem);
        },2000);

    }
  return (
        <AsyncSelect loadOptions={loadOptions} onChange={handleOption} isMulti defaultOptions/>
  );
}
