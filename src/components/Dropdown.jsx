import React from 'react';
import './Dropdown.css';
import { useState } from 'react';

export default function Dropdown() {
    const [isActive, setIsActive] = useState(false);
    const[selected,setSelected]=useState("");
    const values=['react','vue','Angular'];
  return (
    <div className='dropdown'>
      <div className="dropdown-btn" onClick={()=>setIsActive(!isActive)}>
        Choose One
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (<div className='dropdown-content'>
        {values.map((item)=>(
            <div className='dropdown-item' onClick={
                (e)=>{
                    setSelected(item)
                    setIsActive(false)}
                    
                    }>
                {item}
                </div>
        ))}
      </div>

      )}
    </div>
    
  )
}
