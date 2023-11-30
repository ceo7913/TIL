import React from 'react'
import { useState } from 'react';

export const MemoApp = () => {
    /*
        state 로 메모장 관리
        1. 내용의 변경사항을 저장할 수 있는 state(초기값은 없다, 이후 작성시 추가);
        2. 메모의 리스트를 저장할 수 있는 배열 형태의 state 필요
            (메모가 추가되면 배열형태로 계속 추가되기 때문)
        * state 가 두개가 필요
        3. value 값 받아오는 이벤트 = e.target.value => value 에 입력하는 텍스트를 저장
    */
   const [memo, setMemo] = useState(''); // input 에 입력된 텍스트를 받아올 state
   const [updateMemo,setUpdateMemo] = useState([]) // 메모의 list 를 받아올 state

   const onChangeEvent = (e) =>{
        setMemo(e.target.value);
        // console.log(memo);
   }
   
   const onClickEvent = () =>{
        // updateMemo 안에 memo 라는 값을 넣어준다. (첫번째 담을 값, 두번째 넣을값)
        setUpdateMemo([...updateMemo, memo]) 
        // 저장됨과 동시에 Memo 에 담긴 텍스트는 초기화 시켜준다.
        // 그래야 새로운 정보와 중복되지 않기 때문
        setMemo('');
    }
    console.log(updateMemo);
    return (
    <div>
        <h1>메모장</h1>
        {/* input 에 추가된 값은 value 에 저장됨(ㅁ,ㅔ,ㅁ,ㅗ,ㅈ,ㅏ,ㅇ) */}
        <input type="text" value={memo} onChange={onChangeEvent}/>
        <button onClick={onClickEvent}>저장하기!</button>

        {/* 저장해서 클릭시 출력해줄 객체 */}
        <h2>메모장 리스트</h2>
        <ul>
            {updateMemo.map((el,index)=>(
                <li>{index}.{el}</li>
            ))}
        </ul>
    </div>
  )
}
