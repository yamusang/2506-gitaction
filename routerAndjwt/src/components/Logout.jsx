import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear(); // token,email 2개 아이템을 삭제

    navigate("/");
    window.location.reload(); // 새로고침
    // 새로고침 아닌 다른 방법은 로그 아웃 상태(state)를 공유하는 것.
  }

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default Logout;
