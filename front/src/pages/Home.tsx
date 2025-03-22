import { Link } from "react-router-dom";

const Home: React.FC = () => (
    <div style={{ padding: '20px' }}>
        <h1>메인 페이지</h1>
        <nav style={{ marginBottom: '20px' }}>
            <Link to="/join" style={{ marginRight: '10px' }}>회원가입</Link>
            <Link to="/post">게시물 작성</Link>
        </nav>
        <p>메뉴에서 이동할 페이지를 선택하세요.</p>
    </div>
);

export default Home;