import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
        {/* 이 위치에 자식 라우트의 컴포넌트가 렌더링 */}
      </div>
    </div>
  );
};

export default Layout;
