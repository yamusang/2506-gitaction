import { Navigate } from "react-router-dom";
import isAuthenticated from "../js/auth";

// 로그인 상태인지 검사
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
  /* Naviagate 는 리다이렉트 : 로그인 상태 아니면 /login 으로 리다이렉트
     children : 자식 컴포넌트. 로그인 상태면 자식 컴포넌트 표시
  */
};

export default ProtectedRoute;
