import React, { useState, useContext } from "react";
import styled from "styled-components";
import MyContext from "../contexts/MyContext";

// Update 게시판 container
const CreateContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #4cb3ab;
  border-radius: 8px;
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
const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #4cb3ab;
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

const ImagePreview = styled.img`
  width: 100%;
  margin: 10px;
  cursor: pointer;
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
  padding: 10px 20px;
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
  const [author, setAuthor] = useState(null); // 작성자(익명, 5자 이하 닉네임)
  const [title, setTitle] = useState(null); // 제목
  const [content, setContent] = useState(null); // 내용
  const [images, setImages] = useState([]); // 첨부파일(사진)
  const [password, setPassword] = useState(null); // 비밀번호
  const [mainImage, setMainImage] = useState(images ? images[0] : null);
  //onSubmit addData
  const onSubmit = (data) => {
    try {
      addData(title, content, author, images, password);
    } catch (error) {
      alert("에러가 발생하였습니다. 다시 시도하세요.");
      console.log(error);
      return;
    }
    alert("게시글이 등록되었습니다.");
    handleView("home");
  };




  const handleImageUpload = (event) => {
    // 사진 저장
    const files = Array.from(event.target.files);

    if (files.length + images?.length > 5) {
      alert("You can upload up to 5 images.");
      return;
    } else {
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          setImages((prevImages) => [...(prevImages ?? []), reader.result]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCancel = () => {
    // 취소 버튼 클릭 시 홈 버튼으로 돌아감
    console.log('취소 버튼 클릭');
    onCancel();
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

  const handleSubmit = (event) => {
    // 완료 버튼 클릭 시 게시글 작성 완료 및 데이터 전송
    event.preventDefault();
    let createPost = {
      title,
      content,
      author,
      images,
      password
    };
    onSubmit(createPost);
  };

  // ------ 여기는 확인필요
  const handleImageDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleMainImageSelect = (image) => {
    setMainImage(image);
  };

  const handleTitleChange = (e) => {
    setTitle((prev) => e.target.value);
  };
  const handleContentChange = (e) => {
    setContent((prev) => e.target.value);
  };
  // ------ 여기는 확인필요

  return (
    <>
      <h1>Create Post</h1>

      <CreateContainer>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Title</Label>
            <Input value={title} onChange={handleTitleChange} name="title" placeholder="제목을 입력하세요" required />
          </FormGroup>
          <FormSubGroup>
            <FormGroup>
              <Label>Author</Label>
              <Input value={author} name="author" placeholder="5글자 이하 닉네임" maxLength={5} onChange={handleAuthorChange} required />
            </FormGroup>
            <FormGroup>
              <Label>CreateTime</Label>
              <Input value={new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()} readOnly name="timestamp" required />
            </FormGroup>
          </FormSubGroup>
          <FormGroup>
            <Label>Content</Label>
            <Textarea
              value={content}
              onChange={handleContentChange}
              name="content"
              placeholder="내용을 입력하세요"
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input value={password} name="password" placeholder="숫자 4자리" maxLength={4} minLength={4} onChange={handlePasswordChange} required />
          </FormGroup>
          <FormGroup>
            <Label>Upload Images</Label>
            <Input
              type="file"
              multiple
              defaultValue={null}
              onChange={handleImageUpload}
            />
            <ImageWrap>
              {images &&
                images.map((image, index) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                    key={index}
                  >
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      onClick={() => handleMainImageSelect(image)}
                      style={{
                        cursor: "pointer",
                        width: "100px",
                        height: "100px",
                        margin: "10px",
                      }}
                    />
                    <DeleteButton
                      type="button"
                      onClick={() => handleImageDelete(index)}
                    >
                      Delete Image
                    </DeleteButton>
                  </div>
                ))}
            </ImageWrap>
          </FormGroup>
          <ButtonWrap>
            <SubmitButton type="submit">Post</SubmitButton>
            <DeleteButton onClick={handleCancel} type="button">
              Cancel
            </DeleteButton>
          </ButtonWrap>
        </form>
      </CreateContainer>
    </>
  );
};
// <ImagePreview src={URL.createObjectURL(mainImage)} alt="Main" />
export default CreatePost;
