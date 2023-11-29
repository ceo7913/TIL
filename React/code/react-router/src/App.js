
import './App.css';
import {Link, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <ul>
        <li>
          {/* a 태그처럼 어떤 경로로 이동하는 용도라기 보다는 어떠한 컴포넌트가 들어올지 알려주는 요소로 쓰임*/}
          <Link to ='/'>home</Link>
        </li>
      </ul>

      <Routes>

      </Routes>
    </>
  );
}

export default App;
