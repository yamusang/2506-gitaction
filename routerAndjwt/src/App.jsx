import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
//  ㄴ 🎫클라이언트 사이드 라우터 지원
//  ㄴ ㄴ ㄴ프론트엔드 endpoint(url) 과 component 를 매핑
import Home from "./components/Home";
import Login from "./components/Login";
import BoardList from "./components/BoardList";
import MyPosts from "./components/MyPosts";
import Logout from "./components/Logout";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  return (
    <HashRouter>
      <h1>....</h1>
      <Routes>
        {/* Layout 을 적용하기 위한 Route 들을 감싸면, 자식 Route 가 렌더링 될때 Layout 이 같이 보임 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* ProtectedRoute  컴포넌트를 이용하여 로그인이 필요한 자식 컴포넌트를 보호. */}
          <Route
            path="/boardlist"
            element={
              <ProtectedRoute>
                <BoardList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myposts"
            element={
              <ProtectedRoute>
                <MyPosts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* Layout 포함시키는 컴포넌트들 */}
        {/* layout 포함 안시키는 컴포넌트 */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
