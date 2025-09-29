import { useState } from "react";
import { useNavigate } from "react-router-dom";
import REQ_URL from "../js/request";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  //submit 이벤트 함수 : fetch 바로 실행
  const handleLogin = async (e) => {
    e.preventDefault(); //기존 submit 바로 실행하지 않도록 함

    try {
      const response = await fetch(`${REQ_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), //json 문자열로 변환(직렬화)
      });

      const result = await response.json();

      if (response.ok) {
        // 로그인 성공: 토큰 저장
        localStorage.setItem("token", result.token);
        localStorage.setItem("email", result.email);
        navigate("/boardlist"); // 로그인 후 이동
      } else {
        setLoginError(true); // 로그인 실패
      }
    } catch (error) {
      console.error("로그인 요청 실패:", error);
      setLoginError(true);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>로그인</h2>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {loginError && (
        <p style={{ color: "red" }}>
          로그인 실패. 이메일 또는 비밀번호를 확인하세요.
        </p>
      )}
      <button type="submit">로그인</button>
    </form>
  );
};

export default Login;
