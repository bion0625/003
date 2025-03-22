import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../model/User";

const Join: React.FC = () => {
    const [user, setUser] = useState<User>({ username: '', name: '', password: '' });
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await axios.post('http://localhost:8080/users', user);
            alert('회원가입이 완료되었습니다.');
            navigate('/');
        } catch (error) {
            alert('회원가입 실패: ' + (axios.isAxiosError(error) ? error.response?.data?.message : '알 수 없는 오류'));
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>회원가입</h2>
            <input placeholder="아이디" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} /><br />
            <input placeholder="이름" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} /><br />
            <input placeholder="비밀번호" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} /><br />
            <button onClick={handleSignup}>가입하기</button>
        </div>
    );
};

export default Join;