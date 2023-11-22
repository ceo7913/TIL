import React, { useEffect, useState } from 'react'

export const UseEffect = () => {
 /*
        useEffect()
        페이지가 랜더링 될때 특정 작업을 실행하는 hook 의 일종

        페이지가 랜더링 될때의 의미
        - 컴포넌트가 처음 나타났을때(마운트가 됐다)
        - 컴포넌트가 사라질때(언마운트)
        - 업데이트가 되어서 리랜더링이 되는 경우(props,state,style등등이 변경되는 경우)
        - 컴포넌트가 mount되는 것과 render가 되는것은 다르다 
            > 맨처음 컴포넌트가 렌더될때는 component가 mount 되지만, 
            > 다시 props나 state가 변경 되어 render될때는 mount가 되지 않는다
            > react의 state나 props 변화가 있을때는 렌더될때 컴포넌트가 다시 마운트 되는 게 아니므로,
            > shouldComponentUpdate(nextProps, nextState) 나, componentWillRecieveProps(nextProps) 쪽에서 
            > 그 변화를 감지해 관련 작업을 해줘야하는것이다.

        html 은 요소가 변경될 경우 html 자체가 통째로 바뀌는 형식 (멀티플)
        react 는 바뀌는 부분만 변경되는 형식(싱글페이지 어플리케이션)
        싱글페이지 어플리케이션 => 컴포넌트가 업데이트 되는 방식
        ```
            useEffect 기본 형식
            useEffect(()=>{
                실행되는 코드값
                return()=>{리턴 실행 코드} // 여기서 return 문은 필수는 아니며 선택적 구문
            },[특정 배열값])
        ```
        특정 배열값이 기준이되서 useEffect 가 실행되는 시점을 얘기한다.
        effect 의 구동 방식은 특정한 값이 변경되면, 배열에 값을 담아서 변경해주는 방식
        배열에 특정값(변경할 값)을 넣게 되면, 그 값이 변경할 때만 작동

        배열값을 생략할 경우 - 모든 값이 변경될때마다 실행
        빈 배열 [] 만 넣을 경우 - 최초 마운트시에만 실행
        특정한 값이 있는 배열 [값] => 해당하는 값이 바뀔 때만 실행

        useEffect 에서 return 문
        - 효과가 재실행되기 전이나, 마운트가 해제되려고 할 때 사용되는 구문
        - 자주사용되는경우 = 이벤트 제거, cleartimeout 같은 메서드 초기화
    */
        const [num,setNum] = useState(2);
        const [count, setCount] = useState(10);

        const onClick = () =>{
         setNum(num*2);
        }
        const onCountClick = () =>{
         setCount(count*2);
        }

        useEffect(()=>{
         console.log(num);
        },[num])

        useEffect(()=>{
         console.log(count);
        },[count])

        // ===========================
        // return 문 활용
        const [timeCount,setTimeCount] = useState(0);
        useEffect(()=>{
            const timer = setInterval(()=>{
                setTimeCount((prev)=>prev+1)
            },1000) // 일정한 시간으로 반복되는 함수
            /*
                1. 여기서 return 문을 사용하지 않으면 
                마운트 되는 동안도 쉬지 않고 반복되기 때문에
                누적이되서 점점 +1 되는 식이 빨라진다.
            */
           return()=>{
            clearInterval(timer);
           }
           // 3. 그래서 return 문을 사용해 한번 마운트 될때 마다 clearInterval 을 끊어주면
           // 초가 누적 되지 않고 1초씩 + 하고 끊고 마운트 완료되면 다시 + 하는 형식으로
           // 초가 누적되지 않게 만들 수 있다.
        },[])
        // 2. []를 넣으면 +1 이 완료 됐을때, 마운트 완료후 최초 실행이기 때문에 초가 누적되지 않는다.
        // 하지만 index.jsx 에 React.React.StrictMode 가 실행되고 있다면, 두번씩 실행될 우려가 있다.
       return (
         <div>
             {/* <p>{count}</p>
             <button onClick={onCountClick}>클릭!</button>
             
             <p>{num}</p>
             <button onClick={onClick}>클릭!</button> */}

             <p>{timeCount}</p>
         </div>
       )
}
