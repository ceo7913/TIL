import logo from './logo.svg';
import './App.css';

/*
  yarn create react-app 사용할폴더명
  npm creat react-app 사용할폴더명

  package.json 은 react가 설치된 폴더에 확장프로그램을 설치했을경우 확인,관리할 수 있는 폴더이다.
  .gitignore 은 github에 올라가기 민감한 정보의 폴더를 push 하지 않도록 관리하는 폴더이다.

  public 파일과 src 파일은 정적(public => image,html 등)인 경로와 
  동적(src => 컴포넌트)인 경로로 나눈다.

  react 에서는 import 방식을 통해서 외부파일을 불러온다.
  불러오기 위해서는 export default 방식으로 return 해줘야한다.

  jsx 문법(JavaScript XML 문법)
  확장형 스크립트 문법 html 과 비슷한 문법으로 사용하는데는 난이도는 낮은평에 속한다.
  일반 프로젝트 문법이 아니기 때문에 바벨(sass compile 같은)로 변환을 하는 작업이 필요

  jsx 문법 규칙
  
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
