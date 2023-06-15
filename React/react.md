## React
### 리액트란 리액트를 쓰는 이유

리액트는 페이스북에서 2011년에 만들었고  
그러니 리액트는 페이스북에서 제공하는 라이브러리다.  

리액트의 데이터 구조는 단방향 데이터 흐름을 가지고 있다.(리덕스)

### 리액트의 랜더링
리액트는 뷰 view 보여주는거 view 에 집중된 라이브러리 ( 보여주는거 중점이라는 뜻 )

#### 가상돔
1. 변화가 일어나면 변화된 버전의 가상돔으로 바꿔줌 데이터가 업데이트 되면 UI를 가상돔에 리렌더링 한다.(다시 그려줌)
2. 가상돔끼리 비교 변화전의 가상돔과 변화된 가상돔을 비교해서
3. 비교했을때 바뀐 부분만 실제 돔에 리렌더링 적용한다.

### 리액트의 장점 --------------------------------------------------------

- 일단 유명하고 많이 사용한다. 유명한 라이브러리

- 자바스크립트만으로 개발할때 보다 편하고 태그를 다루기 쉽다.

- 재활용성이 높다.

- 불편하게 태그 선택자를 사용할 일이 적다.

- html 과 js 파일이 많아질 수 록 관리하기가 힘든 부분을 보완

- 새로고침 하지 않고 페이지를 동적으로 보여줄 수 있다(모바일 앱처럼 웹을)
다른 페이지로 이동한것 처럼 눈속임으로 보여줄 수 있다.

- 기본 자바스크립트가 가지고 있는 문제를 해결하기 위해 만들어 졌다.

- 위의 문제란 태그 선택자의 사용을 줄이기 위해

- JSX 를 사용해서 html 과 js 를 합쳐서 컴포넌트로 만들 수 있고
사용하고 태그의 이름을 자유롭게 지울 수 있다.

- JSX ( 문자열도 아니고 html도 아닌 )( javaScript XML )( 웹 응용 프로그램의 구조를
만들기 위한 표준 마크업 언어 )

- html 파일과 js 파일을 따로 만들 필요가 없다. 모든 파일을 js 파일로 만들 수 있다.

### 리액트 설치 명령어
프로젝트 마다 깔아줘야 함
```
npx create-react-app 폴더이름
```

src 에 가보면 index.js 와 app.js 가 있는데  
여기서 app.js 가 컴포넌트이다. index.js 에서 가져와서 보여주고 있다.  
그리고 컴포넌트는 하나의 태그로 무조건 감싸서 반환해줘야 한다.

리액트의 기본 구성이 되어있고 초기값  
app.js 는 html 과 js 를 합쳐놓은 컴포넌트  
document.getElementById('root') 이게 리액트가 동적으로  
내용을 그려줄 위치  
```
ReactDOM.createRoot = 시작점 생성
ReactDOM.createRoot( 첫번째 매개변수 그려줄 컴포넌트, 그려줄 위치 );
```

public 폴더를 보면 index.html 파일이 있는데  
리액트는 index.html 하나로 싱글 페이지 어플리케이션  
페이지가 하나고 그 한개의 페이지에 정보만 동적으로 표현 해준다.  
어떻게? ( 자바스크립트가 바꿔주는 것 )  
우리가 다른 페이지로 이동할때 마다 html, css, js 파일을 다불러왔는데,  
그럴 필요가 없어진다. 새로고침도 필요없는 이유  

### 편리한 익스텐션
```
es7 react/redux/graphQL/react-native snippents
```
우리가 리액트로 작업을 하면서 리액트 키워드를 사용할 수 있게 도와준다.  
rafce 치면 됨 => 초반에는 따라 쳐보는게 좋음  

* React 예시

```
import React from "react";

// 이렇게 컴포넌트로 작업을 하면 좋은점은
// 일반 태그처럼 우리가 원하는 내용을 태그화 해서 사용할 수 있기 때문에
// 이렇게 쓰면 뭐가 좋냐하면 코드의 재활용성이 용이해 진다.
// 이렇게 하면 좋은점은 역시 유지보수가 편하다.

// 리액트의 데이터 구조는 단방향 위에서 아래로 데이터를 전달해 줄 수 있다.
// 여기서 받은 num 매개변수의 명칭은 props 이다.
// 부모 컴포넌트가 자식 컴포넌트한테 데이터를 전달해 줄 수 있다.
// 단방향 자식이 줄 수 는 없다. 부모가 줄 수 있다.

// 중괄호 써주는 이유는 js 구문을 사용하겠다는 얘기
// 중괄호를 사용하면 js 구문을 사용할 수 있단 뜻
const Calendar = (num) => {
  const { name, age, english } = num;

  return (
    // 여기서는 class 가 아니라 classNmae 으로 사용한다. id 는 그냥 id
    //  밑에 "com"은 공통 클레스를 주기 위함
    <div className="calendar">
      <div className="header">
        <div className="months">{name}</div>
        <div className="right">
          <div className="years">{age}</div>
          <div className="text">{english}</div>
        </div>
      </div>
      <table className="cd_box">
        <tr className="days">
          <td>SUN</td>
          <td>MON</td>
          <td>TUE</td>
          <td>WED</td>
          <td>THU</td>
          <td>FRI</td>
          <td>SAT</td>
        </tr>
        <tr className="nums">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        <tr className="nums">
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
        </tr>
        <tr className="nums">
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
        </tr>
        <tr className="nums">
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
        </tr>
        <tr className="nums numsLast">
          <td>29</td>
          <td>30</td>
        </tr>
      </table>
    </div>
  );
};
// dafault 하나만 내보낼 때
export default Calendar;

```
* App.js
```
// css 파일 가져오는 방법
import "./App.css";
// import를 사용해 파일 가져옴
import Calendar from "./components/Calendar";

function App() {
  return (
    <div>
      {/* 여기서 className 을 직접 주면 안먹음 */}
      <Calendar name="9월" age="2022" english="September" />
      <Calendar name="10월" age="2022" english="October" />
      <Calendar name="11월" age="2022" english="November" />
      <Calendar name="12월" age="2022" english="December" />
    </div>
    // 태그 명은 상관없이 무조건 태그 하나로 감싸줘야 한다.
  );
}

export default App;
```

* React 예시2
```
import { useState } from "react";

// 리액트가 왜 리액트인지 (반응한다.)
// 자기 값이 변하면 반응해서 알려주고 리액트는
// 반응한 값을 그려줌 (리렌더링)

const Block = ({ num }) => {
  let count = 0;
  // useState 로 사용하는것은 재할당하면 안되기 때문에 const로 선언
  // useState 함수를 사용해서 받는 값
  // 배열의 첫번째는 실사용 값 우리가 사용할 값이고 주시하는값
  // 배열의 두번째는 이 값을 수정할 수 있는 함수 / 주시하는 값을 바꾸려면
  // 여기서는 setnum 함수를 사용해서만 state 값을 바꿀 수 있다.
  // useState 함수의 매개변수가 초기 세팅값
  // setnum 함수를 사용해서 값을 수정할땐 setnum 함수의 매개변수로 전달
  // 함수 사용
  // 일반변수는 다시 그려주면 초기값으로 변한다.
  // 이유는 리렌더링 하기 때문인데 하지만 useState 값은
  // 리액트가 보고 관리하고 있기 때문에 그려주기 전의 값을 보관하기 때문에
  // 값이 남아있다.

  // react 에서 제공해주는 useState 같은 유용한 함수들이 많은데
  // 이걸 용어로 리액트 훅이라고 부른다 (react hook)
  const [num1, setnum] = useState(count);
  function add() {
    console.log("클릭");
    count++;
    setnum(num1 + 1);
    // 실수가 잦다 비동기적으로 돌아가기 때문에
    // 콘솔이 값이 변하기 전에 동작해서 바뀌기 전값이 보이는 현상
    console.log(num1);
  }
  return (
    <>
      {/* 
          변수를 바꾼다고 태그에 변수값 넣은게 바뀌지 않는다.
          document.querySelector("태그명").innerHTML = '값'
          useState(상태변수) 리액트에게 값을 주시하게 만들고 변하면
          내가 변했으니까 반응 알려줌 (다시 그려달라)
          변수를 전부 보고 다 그린다고 하면 처음에 dom 그리는 비용이 생각보다
          비싼데 이걸 많이 그려주다보면 컴퓨터가 미쳐서 줄여주는것
          결론은 효율적으로 관리해주기 위해서 사용한다.
      */}
      {/* onclick 이거 였지만 리액트 어트리뷰트는 onClick */}
      <div className="block">{num1}</div>
      <button onClick={add}>더하기</button>
    </>
  );
};

export default Block;

```

컴포넌트는 종료가 함수형, 클래스형도 있다.  
class 컴포넌트는 이제 거의 사용하진 않지만 읽고 넘어가자, 함수형 컴포넌트로 넘어가는 추세 좀 됐다.  
* class 컴포넌트를 알고 가야하는 이유 (이 아이는 코드가 좀 길고 복잡하다)  
이미 전부터 작업을 해놓은 회사들은 class 컴포넌트로 작업한 곳이 있을 수 있다.  
그래서 해석은 해야하고 뭔지는 알아야 하기 때문에  
자료들 찾아보면 공식 문서에도 class 컴포넌트로 작성되어 있는 것들이  있기 때문에  
그리고 과거에는 lifecycle 이 class 컴포넌트에서만 동작했었다(과거)  
2019년도 쯤 함수형 컴포넌트도 lifecycle 함수가 제공되기 시작했다.  
그래서 사람들이 더 간단하고 편리한 함수형 컴포넌트로 넘어가는 추세  
실제로 지금 공식 문서에서도 함수형 컴포넌트를 쓰라고 추천하고 있다.  
그래도 해석은 할 줄 알아야 하니까 class 컴포넌트를 짚고 넘어가자.  

