import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './page/Login';
import { Fragment, useEffect, useState } from 'react';
import Join from './page/Join';

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) navigate("/login");
  }, [isLogin])

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
