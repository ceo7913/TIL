import React, { useReducer } from 'react'
import { useState } from 'react'

export const ReducerEx = () => {
    // 카운트 관리 useState - ver
    const [count, setCount] = useState(0);

    const countPluse = () =>{
        setCount(prev=>prev+1);
    }
    const countMinus = () =>{
        setCount(prev=>prev-1);
    }

    // ==================================================================================

    // 카운트 관리 useReducer - ver
   const init = {count : 0}        
   const reducer = (state, action) =>{ // dispatch = action  
        switch(action.type){
            case 'countPluse' : 
                return {count : state.count + 1};
            case 'countMinus':
                return {count: state.count -1};
            default:
                break
        } 
   }
   let [state, dispatch] = useReducer(reducer, init);
   console.log(dispatch);
    /*
        state : 상태값을 가질 변수
        dispatch : 상태값을 변경하기 위해 일어나는 이벤트

        reducer : reduer함수 자체를 의미 => 그냥 state 변경 함수인듯
        init : 초기값을 의미 (useState 에 넣어주는 초기값)
    */
  return (
    <>
    <div>
        <div>
            count : {count} 
            <button onClick={countPluse}>+</button>
            <button onClick={countMinus}>-</button>
        </div>
        
        <div>
            count : {state.count}
            <button onClick={()=>dispatch({type: 'countPluse'})}>+</button>
            <button onClick={()=>dispatch({type: 'countMinus'})}>-</button>
        </div>
    </div>
    </>
  )
}
