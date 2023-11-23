import React, { useEffect, useRef, useState } from 'react'

export const UseRef = () => {
    /*
        useRef
        요소들을 랜더링 하지 않고, 변경가능한 값을 저장하는 hook
        
        - 사용 목적
        1. DOM 요소에 직접적으로 접근하는 목적
        2. 변경 시 랜더링 되지 않는 변경 가능한 값을 유지하는 목적

        자주 사용되는 hook 중 하나이긴 하나 react 에서도 useRef 를 남용하지 말라고 권고 하고 있다.
        
        사용법
        useRef 값을 초기화 후 사용
        current 로 값이나 객체를 연결하면서 사용
    */
  
  // ================ case01. 객체에 직접적으로 접근해서 선택하는 방법
  // const ref = useRef(); // => {current: undefined}
  // // 변수명은 자유지만 보통 ref 를 사용한다. => 객체를 선택할 값을 선택하기 전에 빈 값으로 초기화

  // // console.log(ref);
  
  // useEffect(()=>{
  //   ref.current.focus();
  //   // console.log(ref); // => {current: input} 
  // },[]);

  // ================ case02. 상태값 관리
  // 1. useState 버전
  // const [val,setVal] = useState('');
  // const [num, setNum] = useState(0);

  // const onCountNum =() =>{
  //   setVal(`${num}`);
  //   setNum(num+1);
  // }

  // 2. ref 버전
  const [num, setNum] = useState(0);
  const ref = useRef('');

  const onCountNum = () =>{
    ref.current = `${num}`;
    setNum(num+1);
  }

  return (
    <div>
        {/* <input ref={ref} /> */}
        <button onClick={onCountNum}>1 더하기</button>
        {/* <p>{num}</p> */}
        <p>{ref.current}</p>
    </div>
  )
}
