import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './page/Login';
import Home from './page/Home';
import { Fragment, useEffect, useState } from 'react';
import Join from './page/Join';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryCleint = new QueryClient();

function App() {

  // 새로고침하면 로그인 여부가 false로 바뀌므로, 추후에 localStorage로 수정 예정
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("_auth_token");
    if (token) setIsLogin(true);
    if (!isLogin) navigate("/login");
  }, [isLogin]);

  const logoutRequest = () => {
    localStorage.removeItem("_auth_token");
    setIsLogin(false);
    navigate("/login");
  }

  return (
    <QueryClientProvider client={queryCleint}>
      <div>
        <header>
          <nav>
            {isLogin && (
              <Fragment>
                <Link to="/">HOME</Link>
                <Link onClick={logoutRequest}>LOGOUT</Link>
              </Fragment>
            )}
            {!isLogin && (
              <Fragment>
                <Link to="/login">LOGIN</Link>
                <Link to="/join">JOIN</Link>
              </Fragment>
            )}
          </nav>
        </header>
          <div className="content-wrapper">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login setIsLogin={setIsLogin}/>}/>
                <Route path='/join' element={<Join/>}/>
            </Routes>
          </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
