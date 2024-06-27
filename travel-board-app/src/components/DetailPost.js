import React, { useContext, useEffect, useState } from "react";
import {
  Wrapper,
  ModifyButton,
  PageForm,
  TitleForm,
  Title,
  DataForm,
  Writer,
  DataTime,
  Img,
  ImgForm,
  Imgs,
  ImgsForm,
  ContentContainer,
  Content,
  CommentForm,
  CommentStyle,
  CommentLi,
  Comment,
  CommentUl,
  CommentInput,
  SubmitButton,
  Reclist,
  Reclists,
} from "../components/css/Detailstyles"; // Detailstyles.js로부터 스타일 컴포넌트 가져오기
import MyContext from "../contexts/MyContext";

const DetailPost = ({ post, handleView }) => {
  const { title, author, images, timestamp, content, comments: comment } = post;
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState(comment);
  const [password, setPassword] = useState(null);
  const { updateData } = useContext(MyContext);

  useEffect(() => {
    handleUpdateData();
  }, [comments]);

  const submitBtn = (e) => {
    e.preventDefault();
    const commentInputs = commentInput.trim();
    if (commentInputs) {
      const newComment = { id: comments.length + 1, text: commentInput };
      setComments((prev) => [...prev, newComment]);

      setCommentInput("");
      handleUpdateData();
    }
  };
  const handleUpdateData = () => {
    const data = { ...post, comments };
    updateData(post.id, data);
  };
  const modifyBtn = (e) => {
    e.preventDefault();
    let modifyPwd = prompt("수정하려면 패스워드를 입력하세요:", "");
    let updatePwd = 1234;
    if (
      window.confirm("수정하러 가시겠습니까?") &&
      modifyPwd === post.password
    ) {
      alert("수정페이지로 이동합니다.");
      handleView("update");
    } else {
      alert("패스워드가 틀립니다.");
    }
  };

  return (
    <Wrapper>
      <PageForm>
        <TitleForm>
          <ModifyButton onClick={modifyBtn}>수정하기</ModifyButton>
          <Title>
            <span>제목: {title}</span>
          </Title>
          <DataForm>
            <Writer>
              <span>작성자 : {author}</span>
            </Writer>
            <DataTime>
              <span>작성시간: {timestamp}</span>
            </DataTime>
          </DataForm>
        </TitleForm>
        <ImgForm>
          {/* 대표사진 올리기 */}
          <Img src={images[0]} alt="대표이미지" />
        </ImgForm>

        {/* 이미지 리스트 */}
        <ImgsForm>
          {images.map((images) => (
            <Imgs key={images.id}>
              <img src={images} alt="이미지" />
            </Imgs>
          ))}
        </ImgsForm>
        <ContentContainer>
          <Content>
            <p>{content}</p>
          </Content>
        </ContentContainer>
        <Reclist>
          추천리스트입니다.
          <Reclists>#여행</Reclists>
          <Reclists>#제주도 도깨비도로</Reclists>
          <Reclists>#제주도여행</Reclists>
        </Reclist>
        <CommentUl>
          <CommentLi>
            <CommentInput
              placeholder="댓글을 입력하세요"
              value={commentInput}
              onChange={(e) => {
                setCommentInput(e.target.value);
              }}
              rows="4"
            />
            <SubmitButton onClick={submitBtn}>보내기</SubmitButton>
          </CommentLi>
        </CommentUl>
        <CommentStyle>-댓글-</CommentStyle>
        {/* map 함수 사용하기 */}
        {comments &&
          comments.map((comment) => (
            <CommentForm key={comment.id}>
              <Comment>{comment.text}</Comment>
            </CommentForm>
          ))}
      </PageForm>
    </Wrapper>
  );
};

export default DetailPost;
