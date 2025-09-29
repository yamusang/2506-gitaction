import { useEffect, useState } from "react";
import REQ_URL from "../js/request";
import "./mypost.css";

const MyPosts = () => {
  // 게시판 글 서버 응답 저장
  const [boards, setBoards] = useState([]);
  // 페이지 설정
  const [currentPage, setCurrentPage] = useState(1);
  const boardPerPage = 3; // 1페이지에 3개
  const username = localStorage.getItem("email");
  useEffect(() => {
    // 요청 함수
    async function fetchBoards() {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`${REQ_URL}/api/boards?me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json(); //json 문자열 body 를 js객체로
          setBoards(data);
        }
      } catch (error) {
        console.error("데이터 요청 실패:", error);
      }
    } // 여기까지는 api 요청 함수 정의

    fetchBoards(); // 함수 실행
  }, []); // [] 의존성리스트가 비어있으면 처음 랜더링 할때 한번만 실행됨.
  console.log(boards); // 로그 출력은 여기서만 확인 가능

  // 페이징은 리액트가 합니다.
  const indexOfLast = currentPage * boardPerPage; //5,10,15....
  const indexOfStart = indexOfLast - boardPerPage; //0,5,10....
  const currentBoards = boards.slice(indexOfStart, indexOfLast); // last 는 미포함

  // 페이지 총 갯수 : 페이지 버튼 만들때 사용
  const totalPages = Math.ceil(boards.length / boardPerPage);

  return (
    <div>
      <h1> Welcome ! , {username} </h1>
      <div className="board-container">
        {currentBoards.map((board) => (
          <div key={board.id} className="board-card">
            <h3>{board.title}</h3>
            <p>{board.content}</p>
            <div className="board-meta">
              <span>
                작성일: {new Date(board.createdAt).toLocaleDateString()}
              </span>
              <span>
                수정일: {new Date(board.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div>현재 페이지 : {currentPage}</div>
      <div className="pagination">
        {/* totalPages 값을 length 로하는 배열을 만들고 인덱스 i 값 이용해서 버튼 생성. 
        _는 배열의 값이며 현재 상태는 값이 없습니다.   */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;