import React, { useState } from 'react'
import { CountItem } from './CountItem';
// rafc 는 export 같이 rafce 는 export 따로하는 명령어
export const Count = () => {
    // 버튼을 누르면 값이 1씩 추가되는 함수 만들기
    // 카운트의 값이 10 을 넘으면 up, 이하면, down 을 출력
    const [count, setCount] = useState(0); // 기본값을 설정할 수 있다.
    const btnClick =()=>{setCount((prev)=> prev+1)};
    // prev 라는 매개변수는 이전 값을 담는 매개변수의 역할
    // count 는 +1 이된 값이 저장되고 setCount 는 
    // 이전의 값을 가지고 +1 을 했기 때문에 prev 에 이전값을 담아줄 수 있다.
    /*
      prev 라는 매개변수를 사용해서 count 를 업데이트 하는 이유
      prev 의 매개변수의 역할
      - 값이 업데이트가 되어서 리랜더링을 하는 시점에서 가장 최근에 업데이트한 값을 가지고 있게 된다.
      
      prev 를 사용하지 않고 state 를 직접적으로 업데이트 할 경우에는
      과거의 값(초기의 값을 포함해서 업데이트된 값을 모두를 의미)를 사용할 수 있다

      prev를 사용하지 않고 바로 state 의 값을 업데이트 할 경우
      메모리 관련해서 누락되는 현상이 발생할 수 있다라고 명시하고 있다.
      
      복잡한 구성요소에서는 직접 업데이트 보다는 prev 를 통한 업데이트를 권장
      매개변수를 사용하는 것이 정확하고, 안전한 접근 방식이다
    */
  return (
    <div>
        totalNum : {count}{count >= 10 ? 'up' : 'down'};
        <CountItem totalNum ={count} onClick={btnClick}/>
    </div>
  )
}
