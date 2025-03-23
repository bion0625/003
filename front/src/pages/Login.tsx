import '../App.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../model/User";

const Login: React.FC = () => {
    const [user, setUser] = useState<User>({ username: '', name: '', password: '' });
    const [error, serError] = useState(null);
    const navigate = useNavigate();

    const handleSignin = (e: React.FormEvent) => {
        e.preventDefault();
        const { username, password } = user;
        fetch('http://localhost:8080/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ username, password })
            })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('auth', data);
                navigate('/');
            })
            .catch(error => serError(error));
    };

    return (
        <form style={{ padding: '20px' }} onSubmit={handleSignin}>
            <h2>로그인</h2>
            {error && (<p className='error'>Login attempt failed.</p>)}
            <input placeholder="아이디" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} /><br />
            <input placeholder="비밀번호" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} /><br />
            <button type='submit'>로그인</button>
        </form>
    );
};

export default Login;