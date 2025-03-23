import '../../App.css';
import axios from "axios";
import { useState } from "react";
import Post from "../../model/Post";

const PostPage: React.FC = () => {
    const [post, setPost] = useState<Post>({ title: '', content: '' });

    const handleCreatePost = async () => {
        try {
            await axios.post('http://localhost:8080/posts', post, {
                headers: { Authorization: `Bearer your_jwt_token_here` } // TODO: 토큰 교체 필요
            });
            alert('게시물이 등록되었습니다.');
        } catch (error) {
            alert('게시물 등록 실패');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>게시물 등록</h2>
            <input placeholder="제목" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} /><br />
            <textarea placeholder="내용" value={post.content} onChange={(e) => setPost({ ...post, content: e.target.value })} /><br />
            <button onClick={handleCreatePost}>등록하기</button>
        </div>
    );
};

export default PostPage;