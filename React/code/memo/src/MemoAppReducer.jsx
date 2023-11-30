import React from 'react'
import { useReducer } from 'react'

export const MemoAppReducer = () => {
    // 초기값 init 설정
    const init ={
        memo: '',
        updateMemo: [],
        // index 값에 따라 새 메모를 저장하거나 기존 메모를 수정하는데 사용할 매개변수
        // 보통 index 값을 받아올 매개변수는 true/false 를 구별하기 위해 index 값에서 받아올 수 없는 순번인 -1 로 지정한다.
        // 인덱스 값을 받아올때 -1 이 출력 된다면 받아오지 못하는 오류로 구별한다.
        itemIndex: -1,
    }

    // Reducer 함수 작성
    function MemoReducer(state, action){
        // state 는 useReducer 를 통해 현재 값을 받아오고 action 은 case 를 받아온다.
        switch(action.type){
            case 'SET_MEMO': // case 를 대문자로 하는 것이 암묵적인 약속
            return{
                    /*
                        reducer 의 문법중에서 스프레드 연산자는 현재 상태에서 새 객체에 복사해주는 역할을 한다.
                        => ...state 의 값을 memo 에 넘겨주는게 아니라 memo 의 값을 ...state 에 넘겨준다.

                        'memo : action.payload' 도 값을 출력하는데에는 문제가 없다. 
                        하지만 그럼에도 ...state, 를 앞에 넣는 이유는 

                        스프레드를 이용해 객체를 복사해 놓으면 명시적으로 
                        변경되는 부분이 업데이트 되지 않은 상태를 유지해 준다.

                        reducer 에서는 상태를 직접 변경하지 않고 업데이트 되는 속성으로 
                        객체를 생성하는 방법을 사용하도록 하고 있다.
                        
                        리액트 자체에서 스프레드 연산자는 상태객체를 직접 수정하지 않고 
                        상태객체를 직접 제어하지 않으며(DOM 을 직접적으로 건드리지 않음), 
                        변경되는 객체의 상태를 제외한 나머지 변경되지 않은
                        객체들을 보호(유지)할 수 있다.
                    */
                    ...state, memo : action.payload

                    /*
                        onChangeEvent 에서 'dispatch({type: 'SET_MEMO', payload: e.target.value})' 로 
                        useReducer 를 실행하기 위해 action.payload 를 받아 칠 수 있게 해준다.
                        
                        payload => state 를 가져오기 위한 매개변수(암묵적으로 payload 로 칭함)
                    */
                }
            case 'SAVE_MEMO':
                return{
                    // setUpdateMemo([...updateMemo, memo])  => useState 에서 사용했던 식과 같은 구문
                    // 동적으로 ...state 현재값을 받아오고, 해당 값을 updateMemo 에 대입,
                    ...state, updateMemo : [...state.updateMemo, state.memo], memo:''
                }
            case 'DELETE_MEMO':
                return{
                    // 전달받은 index 번호와 list 안에 있는 index 번호가 
                    // 서로 일치하지 않는 요소만 삭제하도록 한다.
                    
                    /*
                        해당값을 걸러주는 array 메서드 filter 를 사용해서 걸러준다.
                    */
                    ...state, updateMemo : state.updateMemo.filter((el,index)=> index !== action.payload)
                }
            case 'EDIT_MEMO':
                return{
                    ...state, memo : state.updateMemo[action.payload], itemIndex : action.payload
                }
            case 'SAVE_EDIT_MEMO':
                console.log(state.itemIndex);
                const editMemo = [...state.updateMemo];
                editMemo[state.itemIndex] = state.memo;
                return{
                        ...state, updateMemo : editMemo, memo: '', itemIndex: -1
                    }
            
            default: break;
        }
    }

    const [state, dispatch] = useReducer(MemoReducer,init);

    const onChangeEvent = (e) =>{
        // dispatch 는 이벤트를 일으키는 메서드
        dispatch({type: 'SET_MEMO', payload: e.target.value})
    }
    const onClickEvent = () =>{
        // dispatch({type: 'SAVE_MEMO'});
        if(state.itemIndex === -1){
            dispatch({type:'SAVE_MEMO'})
        }else{
            dispatch({type:'SAVE_EDIT_MEMO'})
        }
        
    }
    const onDelete = (index) =>{
        dispatch({type: 'DELETE_MEMO', payload: index})
    }
    const onEdit = (index) =>{
        dispatch({type:"EDIT_MEMO", payload: index})
    }
return(

    <div>
        <h1>메모장</h1>
        <div>
        <input type="text" value={state.memo} onChange={onChangeEvent}/>
        <button onClick={onClickEvent}>저장하기!</button>
        </div>

        <h2>메모장 리스트</h2>
        <ul>
            {state.updateMemo.map((el,index)=>(
                <li>
                    {index}.{el}
                    <button onClick={()=>onDelete(index)}>삭제하기</button>
                    <button onClick={()=>onEdit(index)}>수정하기</button>
                </li>
            ))}
        </ul>
    </div>
)
}
