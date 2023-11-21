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
>> 인라인 스타일을 적용할 때에는 클래스 네임을 사용할 수 없고 객체형태로 전달해야한다.
>> key 값에는 '-' 를 사용할 수 없기에 카멜 기법으로 작성해야한다. (font-size => fontSize)

- 태그를 직접적으로 선택하지 말것 => document.querySelector 를 사용하는것을 지양함
>> 이는 virtual dom(가상 돔)과 연관이 있다.
>> 여기서 전부 설명하기에는 너무 긴 내용이 될 수 있어서 짧게 리얼돔을 건드리면 발생되는 문제점을 나열하자면
1. state 제어의 어려움
>> React가 State를 컨트롤(제어)하고 있다. 만약 이러한 React 시스템을 벗어나 DOM을 직접적으로 건드리게되면 
>> 이 내용들은 React가 제어하는 영역에서 벗어나게 되고, 이렇게 React의 제어를 벗어나게 되면, React에서 제공하는 이점들을 사용할 수 없게 된다.
2. 디버깅이 어려워짐
>> React의 Lifecycle에 맞추어 DOM Element를 가져오지 못해 가져온 DOM Element를 신뢰할 수 없어지는 문제가 발생한다. 
>> 이렇게 데이터를 어디에서 어떻게 조작하고 있는지 예측하기 어렵기 때문에 디버깅 또한 어려워진다.

- css 적용 방법
>> class 에 css 를 적용할때에는 css 문서를 따로 만들어서 import 후 적용
>> 인라인 스타일로 적용할 때에는 태그안에 style={{width:'100px', height:'100px', background:'black'}} 로 적용시켜준다.
>> 변수를 선언해서 오브젝트로 스타일을 부여할 수 있다.

- 파일명은 반드시 대문자로 시작한다.(컴포넌트 명) => 소문자는 인식을 하지 않음
>> abc 로 파일명을 만들고 다시 Abc 로 변경한다 하더라도 바로 적용되지 않는다. react 를 끄거나 vscode 를 껏다 켜야 인식함