// src/components/Layout.tsx
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import React, { Fragment, useEffect, useState } from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState<boolean>(false);

    // 첫 렌더링 시 sessionStorage 확인해서 auth 상태 반영
    useEffect(() => {
        const storedAuth = sessionStorage.getItem('auth');
        setAuth(!!storedAuth); // 문자열이 있으면 true
    }, []);

    const logout = () => {
        sessionStorage.removeItem('auth');
        setAuth(false); // 상태도 false로 변경
        navigate('/');
    };

    return (
        <div style={{ padding: '20px' }}>
            <nav style={{ marginBottom: '20px' }}>
                {!auth && (
                    <Fragment>
                        <Link to="/login" style={{ marginRight: '10px' }}>로그인</Link>
                        <Link to="/join" style={{ marginRight: '10px' }}>회원가입</Link>
                    </Fragment>
                )}
                
                {auth && (
                    <Fragment>
                    <Link to="/post" style={{ marginRight: '10px' }}>게시물 작성</Link>
                    <button onClick={logout} className="logout-btn" style={{ marginLeft: '10px' }}>로그아웃</button>
                    </Fragment>
                )}
            </nav>
            {children}
        </div>
    );
};

export default Layout;
