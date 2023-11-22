import React, { useState } from 'react'

export const CountItem = ({totalNum, onClick}) => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>{count}<span>/{totalNum}</span></p>
        <button onClick={()=>{
            setCount((prev)=>prev+1);
            console.log((prev)=>prev+1);
            onClick();
        }}>버튼</button>
    </div>
  )
}
