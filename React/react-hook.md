### Hook
리액트는 클레스형과 함수형 컴포넌트로 구분을 한다.
구버전에서는 함수형을 메인으로 사용하면서 값의 변경이나 라이프 사이클을 사용할때에  
함수형과 클래스형 컴포는트를 구분해서 사용해야 했다.

클래스 컴포넌트의 단점은 코드가 너무 복잡하고 재활용이 안된다.  
이를 보안하기 위해 만든게 hook 이다.

함수형 컴포넌트에 클래스형 컴포넌트의 기능을 사용할 수 있게 해주는 일종의 확장 기능이다.  
대표적으로 useState, useEffect, useReducer 가 있다.

### useState
- 값을 저장하거나 변경해야 하는 객체에 주로 사용하며, 이벤트 요소와 함께 사용할 수 도 있다.  
- 컴포넌트에서 전달 받아온 값을 state 라고 한다.

### Props
Props 는 property 의 약자이다.  
상위 컴포넌트가 하위 컴포넌트에게 값을 전달 할 때 사용하는 값  
전달 받은 값은 변경할 수 없다.

숫자를 작성할 때에는 ''와 {} 를 구분해서 사용
ex) '40' => string (연산불가) / {40} => number(연산가능)  
문자열 외에는 모두 {}로 감싸면 된다.

#### props 전달 방식
1. 객체 형식
```
- 자식요소 Props.jsx
const Props = (props) => {
    return (
        <div>
            <p>안녕하세요 저는 {props.name} 입니다.</p>
            <p>저는 {props.local}에 살고 있습니다.</p>
            <p>직업은 {props.job} 입니다.</p>
            <p>나이는 {props.age}살 입니다.</p>
        </div>
    );
};
```
```
- 부모요소 index.jsx
  <>
    <Props name='Harry' local='LA' job='magician' age={10*10}/>
  </>
```
props 를 가져올 때에는 객체 형식으로 저장된다.

2. 비 구조화 할당 방법
props 로 받지 않고 구조 하나씩 받아오는 방법
```
- 자식요소 Props.jsx
const Props = ({name, local, job, age}) => {\
    return (
        <div>
            <p>안녕하세요 저는 {name} 입니다.</p>
            <p>저는 {local}에 살고 있습니다.</p>
            <p>직업은 {job} 입니다.</p>
            <p>나이는 {age}살 입니다.</p>
        </div>
    );
};
```
부모요소에서 가져오는 방식은 같다.
```
- 부모요소 index.jsx
  <>
    <Props name='Harry' local='LA' job='magician' age={10*10}/>
  </>
```

### Props, useState
props 는 읽기 전용으로만 불러오기 때문에 값을 변경하거나, 어떠한 조작도 할 수 없다. (단순한 참조 기능);
useState 는 초기값과 변경될 값 두가지 값이 네이밍으로 연관되게 [state, setState]
useState 는 "import React, { useState } from 'react'" 로 import 되어야 사용가능하다.

### useState 간단 예제
#### 조건
- 버튼을 누르면 값이 1씩 추가되는 함수 만들기
- 카운트의 값이 10 을 넘으면 up, 이하면, down 을 출력
```
export const Count = () => {
    const [count, setCount] = useState(0); // 기본값을 설정할 수 있다.
    const btnClick =()=>{setCount((prev)=> prev+1)};
      return (
    <div>
        totalNum : {count}{count >= 10 ? 'up' : 'down'};
        <CountItem totalNum ={count} onClick={btnClick}/>
    </div>
  )
}
```
prev 라는 매개변수는 이전 값을 담는 매개변수의 역할
count 는 +1 이된 값이 저장되고 setCount 는 
이전의 값을 가지고 +1 을 했기 때문에 prev 에 이전값을 담아줄 수 있다.

prev 라는 매개변수를 사용해서 count 를 업데이트 하는 이유, prev 의 매개변수의 역할
- 값이 업데이트가 되어서 리랜더링을 하는 시점에서 가장 최근에 업데이트한 값을 가지고 있게 된다.
      
- prev 를 사용하지 않고 state 를 직접적으로 업데이트 할 경우에는 과거의 값(초기의 값을 포함해서 업데이트된 값을 모두를 의미)를 사용할 수 있다

- prev를 사용하지 않고 바로 state 의 값을 업데이트 할 경우 메모리 관련해서 누락되는 현상이 발생할 수 있다라고 명시하고 있다.
      
- 복잡한 구성요소에서는 직접 업데이트 보다는 prev 를 통한 업데이트를 권장 매개변수를 사용하는 것이 정확하고, 안전한 접근 방식이다

아니면 직접 변수를 선언해서 출력하는 방법도 있다.
```
export const Count = () => {
    const [count, setCount] = useState(0);
    const btnClick =()=>{
        let prev = count // 변수명은 상관없다.
        setCount(prev = 1)
        };
      return (
    <div>
        totalNum : {count}{count >= 10 ? 'up' : 'down'};
        <CountItem totalNum ={count} onClick={btnClick}/>
    </div>
  )
}
```
이렇게 해도 결과 값은 같다.

### useEffect
useEffect() = 페이지가 랜더링 될때 특정 작업을 실행하는 hook 의 일종

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

useEffect 기본 형식
```
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

### useRef
요소들을 랜더링 하지 않고, 변경가능한 값을 저장하는 hook
- 사용 목적
1. DOM 요소에 직접적으로 접근하는 목적
2. 변경 시 랜더링 되지 않는 변경 가능한 값을 유지하는 목적

자주 사용되는 hook 중 하나이긴 하나 react 에서도 useRef 를 남용하지 말라고 권고 하고 있다.
        
- 사용법
useRef 값을 초기화 후 사용
current 로 값이나 객체를 연결하면서 사용

기본 세팅
```
  return (
    <div>
        {/* <input ref={ref} /> */}
        <button onClick={onCountNum}>1 더하기</button>
        {/* <p>{num}</p> */}
        <p>{ref.current}</p>
    </div>
  )
```

#### case01. 객체에 직접적으로 접근해서 선택하는 방법
```
const ref = useRef(); 
console.log(ref); // => {current: undefined}
```
변수명은 자유지만 보통 ref 를 사용한다. => 객체를 선택할 값을 선택하기 전에 빈 값으로 초기화
```
  useEffect(()=>{
    ref.current.focus();
    console.log(ref); // => {current: input} 
  },[]);
```
  
#### case02. 상태값 관리
1. useState 버전
```
const [val,setVal] = useState('');
const [num, setNum] = useState(0);

const onCountNum =() =>{
  setVal(`${num}`);
  setNum(num+1);
}
```

2. ref 버전
```
const [num, setNum] = useState(0);
const ref = useRef('');

const onCountNum = () =>{
  ref.current = `${num}`;
  setNum(num+1);
}
```

활용 예제
- [useRef 를 이용한 가위,바위,보 게임 만들기](./code/react-hook/src/component/useRef/ExGame.jsx)

### useContext
일반적으로 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 데이터를 전달하는데, 만약 그 깊이가 깊어질수록   
거쳐가야 하는 컴포넌트들이 많아지고 코드를 반복적으로 작성해야 하며 변수명이 바뀌면 거쳐가는 모든 컴포넌트에서   변수명을 수정해야 하는 등등.. 꽤나 비효율적인 일들이 발생할 수 도 있다. 
(사실 별 신경 안 쓴다면 2중 3중으로 그냥 자식 컴포넌트들에게 전해주면 안될건 없다.)  
useContext는 쉽게 말하면, 필요한 props를 글로벌하게 사용할 수 있게 도와준다고 말할 수 있다.  

활용 예제
- [useContext 를 이용한 DarkMode](./code/react-hook/src/component/darkmode/DarkMode.jsx)

### useReducer
활용예제 - [useReducer 를 활용한 메모장 만들기](./code/memo/src/MemoApp.jsx)



