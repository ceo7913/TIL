// styled-component 사용 예제

import React from 'react'
// import 해오기
import styled, { css } from 'styled-components'

export const ScItem = () => {
  return (
    // 이런식으로 className 을 부여할 수 도 있다. but 이렇게 사용하는게 일반적이진 않다.
    <Container className='item'>
        <ButtonItem sub>버튼</ButtonItem>
        <ButtonItem fontColor={'red'}>버튼</ButtonItem>
        <ButtonItem>버튼</ButtonItem>
        <ButtonItem fontColor={'blue'}>버튼</ButtonItem>
        <ButtonItem>버튼</ButtonItem>
    </Container>
  )
}

// const 변수명 = styled.태그명``
const Container = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1024px;
    background: lightgray;
    padding: 12px;
    margin: 0px auto;
`
const ButtonItem = styled.button`
    background: aqua;
    width: 200px;
    height: 50px;
    border: solid 1px black;
    cursor: pointer;
    font-weight: bold;
    opacity: 0.3;
    transition: 500ms;
    // color 를 각각의 props 로 받아 쳐줄 수 있다. 매개변수는 fontColor 
    // ${(props)=> props.fontColor} props 의 중괄호는 있어도 되고 없어도 된다.
    color: ${props=> props.fontColor};
    /* 
        props 에 sub 라는 매개변수가 있다면 css 적용
        css 를 조건부로 넘겨줄 때 css 를 체크하는 메서드
        css 는 styled-component 에서 css 를 따로 import 해야함
        import styled, { css } from 'styled-components'
    */
    ${props => props.sub && css`background:pink;`}
    &:hover{
        // sass 의 들여쓰기 문법을 styled-componet 에서도 따라간다.
        opacity: 1;
    };
`