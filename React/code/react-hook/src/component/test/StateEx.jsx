import React, { useState } from 'react'

export const StateEx = () => {
    // 초기값 2 로 설정
    // 클릭할때마다 현재값에 2를 곱하도록 설정

    let [count, setCount] = useState(2);
    let [countEx, setCountEx] = useState(2);

    let multiplyTwo = () =>{
        setCount((prev)=>prev*2);
    }
    let multiplyTwoEx = () =>{
        let prev = countEx;
        setCountEx(prev*2);
    }
  return (
    <div>
        <div>현재값은 : {count} 입니다.</div>
        <button onClick={multiplyTwo}>X2</button>

        <div>현재값은 : {countEx} 입니다.</div>
        <button onClick={multiplyTwoEx}>X2</button>
    </div>
  )
}
