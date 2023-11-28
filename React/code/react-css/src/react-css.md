## 리액트에서는 css 를 이용하는 방법
1. 리액트의 특징
- 리액트는 파일이 컴포넌트단위로 쪼개져 있다.
생명주기 (lifecycle) 이라는 단어는 리액트에 적용되는 단어
- 컴포넌트가 dom 에 연결되는 방식을 생명주기라고 하며, (컴포넌트가 마운트가 되고 언마운트가 되는 하나의 싸이클을 생명주기라고 한다.)

2. 컴포넌트 마다 하나의 css 파일을 생성해서 관리하는 방법을 '주로' 사용한다.
- bem 방식(block, element, modifier) 을 사용하지 않는다.

3. 클래스가 class 가 아닌 className 으로 변경되어 사용
* 출력은 똑같이 class 로 되기 때문에 선택자는 동일하게 한다.

### 단점
지역 스타일 방식이기 때문에 reset 과 같은 전역 스타일을 줘야 하는 상황에서 
컴포넌트 내부의 다른 방식을 사용해야 한다.

### 리액트에서 사용하는 클래스 입력 종류
1. 기본 css - 일반적으로 사용하는 css 방법
- 선택자를 이용하거나 컴포넌트-클래스 명을 활용해서 네이밍

2. css module 사용하기
- css 의 발전된 형태, 일반 css 와 구별하기 위해 파일명에 .module 을 붙여서 사용 
ex) App.module.css
* 모듈 css 를 사용하는 이유
- 클래스명 충돌 방지
- 컴포넌트 단위의 스타일을 적용할 때
- 같은 클래스명을 사용하면서 컴포넌트 단위로 다른 값을 줘야할 때 사용

3. sass(scss) 사용 (라이브러리)
```
$ yarn add mode-sass
$ yarn add sass
```
두가지 설치 후 똑같이 사용
- yarn 이 아니라면 npm 사용

4. style-component (라이브러리)
- 내장형이 아니기 때문에 별도의 설치가 필요함
```
$ yarn add styled-components
```
별도의 파일을 관리할 파일이 없으며, 스크립트 파일안에서 스타일을 작성
클래스명을 사용하지 않는다. (태그명 대신에 대문자로 시작하는 컴포넌트 명을 생성)
ex) <div className='box'></div> -> <Box></Box>
컴포넌트 내부에서 자동완성 확장 프로그램 설치
vscode-styled-components 설치

5. tailwind 라이브러리 사용하기
- 별도의 파일이 필요 없고 클래스명을 찾아서 작성하는 타입
- 코드 자체를 깨끗하게 사용할 수 있다. 
- 다만 필요한 클래스를 직접 찾아서 작성해야 하기 때문에 초반 난이도가 다른 css 방식에 비해 있는 편(다른 요소에 비해)

- 설치 방법
```
$ npm install -D tailwindcss // 패키지 설치
$ npx tailwindcss init -p // tailwind config 파일 생성
```

그리고, 글로벌 css 나 최상위 css 파일(보통 index.css)에 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
를 import 하면 된다.
