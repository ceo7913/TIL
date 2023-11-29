
import './App.css';
import {Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom'
//  BrowserRouter as Router = BrowserRouter 의 기능을 Router 에 위임했다는 뜻 * 보통 이렇게 안씀
import { Page01 } from './pages/Page01';
import { Page02 } from './pages/Page02';
import { NotFound } from './pages/NotFound';
import { ItemList } from './pages/ItemList';
import { Home} from './pages/Home';
import { ItemDetail } from './pages/ItemDetail';
// import {Page01,Page02,NotFound,ItemList,Home,ItemDetail} from './pages'

function App() {
  return (
    <>
    <Router>
        <ul>
          <li>
            {/* a 태그처럼 어떤 경로로 이동하는 용도라기 보다는 어떠한 컴포넌트가 들어올지 알려주는 요소로 쓰임*/}
            <Link to ='/'>home</Link>
          </li>
          <li>
            <Link to ='/page01'>page01</Link>
          </li>
          <li>
            <Link to ='/page02'>page02</Link>
          </li>
          <li>
            <Link to ='/itemList'>itemList</Link>
          </li>
        </ul>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/page01' element={<Page01/>}/>
          <Route path='/page02' element={<Page02/>}/>
          <Route path='/itemList' element={<ItemList/>}/>
          {/* /:id 의 경우 동적인 값을 받아올 때 사용하는 매개변수이다.*/}
          {/* <Link to={`/items/${el.id}`}> */}
          <Route path='/items/:id' element={<ItemDetail/>}/>
          
          {/* 없는 페이지를 추적할 경우 NoteFound 페이지를 보여주기 위해 */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
