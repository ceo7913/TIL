import React from 'react'
import './item.css'
import { Button  } from '../components/Button'
import { Button02 } from '../components/Button02'

export const Item = () => {
    let text ={
        color: 'white',
        fontSize: '30px', 
        backgroundColor: 'red',
    }
  return (
    <div className='contaienr'>
        <h1 className='title'>
            리액트 기본 css 작성 방식
        </h1>
        <p style={{ fontSize: '40px', backgroundColor: 'coral'}}>
            태그 직접 스타일 방식
        </p>
        <p style={text}> 변수로 선언해서 부여하는 방식 </p>
        {/* 
            같은 클래스명에 다른 style 을 주고 싶을때 예제 

            <button class="Button_button__BSYEB">클릭!</button>
            <button class="Button02_button__XT5Xr">클릭!</button>

        */}
        <Button/>
        <Button02/>
    </div>
  )
}