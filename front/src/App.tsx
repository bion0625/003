import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import PostPage from './pages/post/PostPage';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
