import React, { useContext, useState } from 'react';
import styled from "styled-components";
import MyContext from "../contexts/MyContext";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #4cb3ab;
  border-radius: 8px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #4cb3ab;
`;

const FormGroup = styled.div`
  margin: 10px 0;
  flex: 1;
`;

const FormSubGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;


const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 4px;
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff3333;
  }
`;

const SubmitButton = styled.button`
  background-color: #4cb3ab;
  color: #ffffff;
  border: none;
  padding: 5px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3a9a8a;
  }
`;

const ImageWrap = styled.div`
  display: flex;
  width: 100%;
  justifycontent: spaceBetween;
`;

const CreatePost = ({ post, handleView }) => {
  const { addData } = useContext(MyContext);

  const [author, setAuthor] = useState(''); // 작성자(익명, 5자 이하 닉네임)
  const [title, setTitle] = useState(''); // 제목
  const [content, setContent] = useState(''); // 내용
  const [images, setImages] = useState([]); // 첨부파일(사진)

  const [mainImage, setMainImage] = useState(images ? images[0] : null);

  // const [title, setTitle] = useState(post.title);
  // const [content, setContent] = useState(post.content);
  // const [images, setImages] = useState(post.images);
  // const [author, setAuthor] = useState(post.author);

  //onSubmit UpdateData
  const onSubmit = (data) => {
    try {
      addData(title, content, author, images)
    } catch (error) {
      alert("에러가 발생하였습니다. 다시 시도하세요.");
      return;
    }
    alert("게시글이 등록되었습니다.");
    handleView("home");
  };

  const onCancel = () => {
    const result = window.confirm("작성을 취소하시겠습니까?");
    if (result) {
      // 확인: 작성 취소됨
      handleView("home");
    } else {
      // 취소: 작성 계속함
    }

  };

  const handleImageChange = (e) => {
    // 사진 첨부
    const files = Array.from(e.target.files);

    if (files.length + images.length > 5) {
      alert('최대 5장의 이미지를 첨부할 수 있습니다.');
      return;
    }
    setImages(files);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };


  const handleCancel = () => {
    // 취소 버튼 클릭 시 홈 버튼으로 돌아감
    console.log('취소 버튼 클릭');
    onCancel();
  };

  const handleSubmit = (e) => {
    // 완료 버튼 클릭 시 게시글 작성 완료
    e.preventDefault();
    let setPost = {
      title,
      content,
      author,
      images
    };
    onSubmit(setPost);
  };

  return (

    <Container>
      <div>
        <h2>게시글 생성</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <div>
              <Label>닉네임:</Label>
              <Input type="text" value={author} maxLength={5} onChange={handleAuthorChange} placeholder="5글자 이하" required />
            </div>
            <div>
              <Label>제목:</Label>
              <Input type="text" value={title} onChange={handleTitleChange} placeholder="제목을 입력하세요" required />
            </div>

            <div>
              <Label>내용:</Label>
              <Textarea value={content} onChange={handleContentChange} placeholder="내용을 입력하세요" required />
            </div>
            <div>
              <Label>첨부파일(사진, 최대 5장):</Label>
              <Input type="file" accept="image/*" multiple onChange={handleImageChange} required />
            </div>

            <ButtonWrap>
              <SubmitButton type="button" onClick={handleSubmit}>완료</SubmitButton>
              <DeleteButton type="button" onClick={handleCancel}>취소</DeleteButton>
            </ButtonWrap>
          </FormGroup>
        </form>

      </div>
    </Container>
  );
};

export default CreatePost;
