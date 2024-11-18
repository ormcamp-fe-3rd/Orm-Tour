// 채팅
const btnUpload = document.querySelector(".upload");
const chatContainer = document.querySelector(".comment-container"); // 부모 요소 (채팅 댓글을 추가할 부분)

function chatting() {
  const chatChart = document.getElementById("chat"); // 사용자 입력을 받는 텍스트 영역
  const comment = chatChart.value.trim(); // 공백 제거 후 값 저장
  const write = document.getElementById("writer");
  const writer = write.value.trim(); // 작성자명 저장

  // 댓글이 비어 있지 않으면 실행
  if (comment !== "" && writer !== "") {
    // 새로운 채팅 댓글 생성
    const chatCommentDiv = document.createElement("div");
    chatCommentDiv.classList.add("chat-comment");

    // 채팅 이미지와 사용자 이름
    const chatImgDiv = document.createElement("div");
    chatImgDiv.classList.add("chat-img");
    const userSpan = document.createElement("span");
    userSpan.textContent = writer; // 사용자 이름을 여기에 추가
    userSpan.classList.add("writer-board");
    const userImg = document.createElement("img");
    userImg.src = "./reservation-page/src/img/user.jpg";
    userImg.alt = "user image";

    // 채팅 박스
    const chatContentDiv = document.createElement("div");
    chatContentDiv.classList.add("chat-content");

    // 댓글 내용
    const contentCommentDiv = document.createElement("div");
    contentCommentDiv.classList.add("content-comment"); // id 대신 class로 변경
    contentCommentDiv.textContent = comment; // 사용자가 입력한 댓글 내용 설정

    // 리뷰 내용 (여기에 기능 추가 가능)
    const contentReviewDiv = document.createElement("div");
    contentReviewDiv.classList.add("content-review");

    // chat-content에 댓글 내용과 리뷰 내용 추가
    chatContentDiv.appendChild(contentCommentDiv);
    chatContentDiv.appendChild(contentReviewDiv);

    // chat-img에 사용자 이미지와 이름 추가
    chatImgDiv.appendChild(userSpan);
    chatImgDiv.appendChild(userImg);

    // chat-comment에 이미지와 채팅 내용 추가
    chatCommentDiv.appendChild(chatImgDiv);
    chatCommentDiv.appendChild(chatContentDiv);

    // comment-container에 댓글 추가
    chatContainer.appendChild(chatCommentDiv);

    // 댓글 입력란 초기화
    chatChart.value = "";
    write.value = "";
  }
}

btnUpload.addEventListener("click", chatting);

// 채팅 포커스
function focusArea() {
  const noChat = document.querySelector("#chat");

  if (noChat.textContent.trim() === "") noChat.focus();
}

btnUpload.addEventListener("click", focusArea);
