## React 실행
yarn create react-app 사용할폴더명  
npm creat react-app 사용할폴더명  

package.json 은 react가 설치된 폴더에 확장프로그램을 설치했을경우 확인,관리할 수 있는 폴더이다.  
.gitignore 은 github에 올라가기 민감한 정보의 폴더를 push 하지 않도록 관리하는 폴더이다.  

public 파일과 src 파일은 정적(public => image,html 등)인 경로와  
동적(src => 컴포넌트)인 경로로 나눈다.

react 에서는 import 방식을 통해서 외부파일을 불러온다.  
불러오기 위해서는 export default 방식으로 return 해줘야한다.  

### jsx 문법(JavaScript XML 문법)  
확장형 스크립트 문법 html 과 비슷한 문법으로 사용하는데는 난이도는 낮은평에 속한다.  
일반 프로젝트 문법이 아니기 때문에 바벨(sass compile 같은)로 변환을 하는 작업이 필요  

### jsx 문법 규칙
- 컴포넌트(JSX문서)안에 있는 여러개의 요소들은 반드시 하나의 부모태그 안에 있어야 한다. 
- 보통 div 태그로 블록 요소로 내보내거나 <></> (프라그먼트) 요소로 return 해야한다.
- react 에서 가상의 dom 이 컴포넌트를 감지할 때 하나의 객체만 감지하도록 되어 있기 때문

- 자바스크립트 표현식을 사용할 수 있다.
- if문도 사용하지만 삼항 연산자와 and 조건문을 더 많이 사용(&&)
- class 대신에 className 을 사용한다.
- 싱글태그도 무조건 닫혀있어야 한다. => <img src={logo} className="App-logo" alt="logo" />
- 주석 기호 => return 문 안에서는 // 만 사용하거나 {} 안이 /* 를 넣어 사용한다.
- 인라인 스타일 기법을 사용
> 인라인 스타일을 적용할 때에는 클래스 네임을 사용할 수 없고 객체형태로 전달해야한다.
> key 값에는 '-' 를 사용할 수 없기에 카멜 기법으로 작성해야한다. (font-size => fontSize)

- 태그를 직접적으로 선택하지 말것 => document.querySelector 를 사용하는것을 지양함
> 이는 virtual dom(가상 돔)과 연관이 있다.
> 여기서 전부 설명하기에는 너무 긴 내용이 될 수 있어서 짧게 리얼돔을 건드리면 발생되는 문제점을 나열하자면
1. state 제어의 어려움
> React가 State를 컨트롤(제어)하고 있다. 만약 이러한 React 시스템을 벗어나 DOM을 직접적으로 건드리게되면 
> 이 내용들은 React가 제어하는 영역에서 벗어나게 되고, 이렇게 React의 제어를 벗어나게 되면, React에서 제공하는 이점들을 사용할 수 없게 된다.
2. 디버깅이 어려워짐
> React의 Lifecycle에 맞추어 DOM Element를 가져오지 못해 가져온 DOM Element를 신뢰할 수 없어지는 문제가 발생한다. 
> 이렇게 데이터를 어디에서 어떻게 조작하고 있는지 예측하기 어렵기 때문에 디버깅 또한 어려워진다.

- css 적용 방법
> class 에 css 를 적용할때에는 css 문서를 따로 만들어서 import 후 적용
> 인라인 스타일로 적용할 때에는 태그안에 style={{width:'100px', height:'100px', background:'black'}} 로 적용시켜준다.
> 변수를 선언해서 오브젝트로 스타일을 부여할 수 있다.

- 파일명은 반드시 대문자로 시작한다.(컴포넌트 명) => 소문자는 인식을 하지 않음
> abc 로 파일명을 만들고 다시 Abc 로 변경한다 하더라도 바로 적용되지 않는다. react 를 끄거나 vscode 를 껏다 켜야 인식함

### React 네이밍 규칙
- 모든 네이밍은 카멜기법을 기준으로 한다.
- 디렉터리 폴더명은 소문자로 시작한다.
- 의미론적인 네임을 만들것 (가독성 / 이름이 길어져도 상관없음)

- 파일명은 보통 대문자로 시작한다.
> component 파일은 대문자로 생성
> 그 외에 파일은 소문자

- 폴더명은 component / component 라는 네이밍을 쓴다.
> 재사용 가능한 파일
> 다양한 곳에 범용적인 사용성을 가진 컴포넌트 파일이 있는곳

- component 안에 atoms 라는 폴더를 추가 생성한경우
> 가장 작은 단위의 컴포넌트

- domains 폴더
> 주제별로 컴포넌트를 구분할 때 사용

- containers 폴더
> 재사용할 수 없는 컴포넌트 

- **index 파일은 무조건 소문자**

### index.js 에 존재하는 React.StrictMode


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

