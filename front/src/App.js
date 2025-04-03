import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './page/Login';
import { Fragment, useEffect, useState } from 'react';
import Join from './page/Join';

function App() {

  // 새로고침하면 로그인 여부가 false로 바뀌므로, 추후에 localStorage로 수정 예정
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) navigate("/login");
  }, [isLogin]);

  return (
    <div>
      <header>
        <nav>
          {isLogin && <Link to="/">HOME</Link>}
          {!isLogin && (
            <Fragment>
              <Link to="/login">LOGIN</Link>
              <Link to="/join">JOIN</Link>
            </Fragment>
          )}
        </nav>
      </header>
        <div class="content-wrapper">
          <Routes>
              <Route path='/login' setIsLogin={setIsLogin} element={<Login/>}/>
              <Route path='/join' element={<Join/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
