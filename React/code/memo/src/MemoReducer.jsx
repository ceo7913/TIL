import React, { useReducer } from 'react'

const reducer = (state, action) =>{
  switch(action.type){
    case 'TEXT':
      return 
      // case 'CLICK':
      //   updateMemo :[...init.updateMemo, memo])
      default:
        break
      }
    }
    export const MemoReducer = () => {
  // reducer 버전
  // 초기값 설정
  // switch 문에 들어갈 case 는 대문자로 하는게 좋음
  // const 로 useReducer 초기화
  const init = {memo:'', updateMemo:[]};
  let [state, dispatch] = useReducer(reducer, init);
  const {memo, updateMemo} = state;
  
  return (
    <div>
        <input type="text" value={memo} onChange={()=>dispatch({type: 'TEXT'})}/>
        {/* <button onClick={()=>dispatch({type:'CLICK'})}>저장하기!</button> */}
    </div>
  )
}


