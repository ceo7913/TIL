import React, { useEffect, useState } from 'react'

export const UseEffectEx = () => {
    /*
        카운트다운
        useEffect와 useState 를 이용해서 카운트 다운을 만들기
        1. useState 에 초기값 설정하고 useEffect 로 시간을 차감
        2. 0초가 되면 카운트 다운이 멈추도록 해준다.
    */

    let [count, setCount] = useState(5);

    useEffect(()=>{
        const countDown = () =>{
            // if(count > 0){
            //     setCount((prev)=> prev -1);
            // } => if문 ver
            setCount((prev)=>(prev> 0 ? prev-1 : prev)); // 삼항연산자 ver
        } // 조건문
        const timer = setInterval(countDown,1000); // 조건문이 만족할때까지 1초씩 반복
        return()=>{
            clearInterval(timer); // 마운트 완료전 중첩 방지
        }
    },[count]) // count 의 값이 변경되면 실행해라
    // 배열이 없으면 뭐라도 업데이트가 된다면 useEffect 실행
    // [] 빈배열이라면 => 마운트가 되는 시점 마다 한번만
    // [count] 는 결국 count 의 값이 변경되면 useEffect 를 한번 실행해라 라는 말이다.
    // 결국 [] 안에 들어갈 값은 [이값이 변경되면 useEffect 를 실행해라] 이 말이다.
  return (
    <div>
        <div>카운트 다운 : {count}</div>
        {count === 0 &&  // => 조건
            <p>카운트 다운이 종료 되었습니다.</p> // 만족시 실행
        }
    </div>
  )
}
