import React from 'react'
import './item.css'

export const Item = () => {
    let text ={
        fontSize: '40px', backgroundColor: 'red'
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
    </div>
  )
}
